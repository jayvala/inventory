<?php

namespace Drupal\search_autocomplete\Controller;

use Drupal;
use Drupal\Component\Render\HtmlEscapedText;
use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\Core\Form\FormInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a listing of autocompletion_configuration entities.
 *
 * List Controllers provide a list of entities in a tabular form. The base
 * class provides most of the rendering logic for us. The key functions
 * we need to override are buildHeader() and buildRow(). These control what
 * columns are displayed in the table, and how each row is displayed
 * respectively.
 *
 * Drupal locates the list controller by looking for the "list" entry under
 * "controllers" in our entity type's annotation. We define the path on which
 * the list may be accessed in our module's *.routing.yml file. The key entry
 * to look for is "_entity_list". In *.routing.yml, "_entity_list" specifies
 * an entity type ID. When a user navigates to the URL for that router item,
 * Drupal loads the annotation for that entity type. It looks for the "list"
 * entry under "controllers" for the class to load.
 *
 * @package Drupal\search_autocomplete\Controller
 *
 * @ingroup search_autocomplete
 */
class AutocompletionConfigurationListBuilder extends ConfigEntityListBuilder implements FormInterface {

  /**
   * The key to use for the form element containing the entities.
   *
   * @var string
   */
  protected $entitiesKey = 'configs';

  /**
   * The entities being listed.
   *
   * @var \Drupal\Core\Entity\EntityInterface[]
   */
  protected $entities = [];

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'search_autocomplete_admin_form';
  }

  /**
   * Adds some descriptive text to our entity list.
   *
   * Typically, there's no need to override render(). You may wish to do so,
   * however, if you want to add markup before or after the table.
   *
   * @return array
   *   Renderable array.
   */
  public function render() {
    return \Drupal::formBuilder()->getForm($this);
  }

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['label'] = $this->t('Autocompletion Configuration Name');
    $header['enabled'] = $this->t('Enabled');
    $header['selector'] = $this->t('Selector');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   *
   * @param \Drupal\search_autocomplete\Entity\AutocompletionConfiguration $entity
   */
  public function buildRow(EntityInterface $entity) {
    $row['label'] = ['#plain_text' => $entity->label()];
    $row['enabled'] = [
      '#type' => 'checkbox',
      '#default_value' => $entity->getStatus(),
    ];
    $row['selector'] = ['#plain_text' => $entity->getSelector()];

    $editable = $entity->getEditable() ? 'editable' : '';
    $deletable = $entity->getDeletable() ? 'deletable' : '';
    $row['#attributes'] = [
      'id' => [$entity->id()],
      'class' => [$editable, $deletable],
    ];

    return $row + parent::buildRow($entity);
  }

  /**
   * Implements \Drupal\Core\Form\FormInterface::buildForm().
   *
   * Form constructor for the main block administration form.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $settings = Drupal::config('search_autocomplete.settings');

    $form[$this->entitiesKey] = [
      '#type' => 'table',
      '#header' => $this->buildHeader(),
      '#empty' => t('There are no @label yet.', ['@label' => $this->entityType->getPluralLabel()]),
    ];

    // Build blocks first for each region.
    $this->entities = $this->load();
    foreach ($this->entities as $entity) {
      $row = $this->buildRow($entity);
      $form[$this->entitiesKey][$entity->id()] = $row;
    }

    // Use admin helper tool option settings.
    $form['admin_helper'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Use autocompletion helper tool for Search Autocomplete administrators.'),
      '#description' => $this->t('If enabled, user with "administer Search Autocomplete" permission will be able to use admin helper tool on input fields (recommended).'),
      '#default_value' => $settings->get('admin_helper'),
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save changes'),
      '#button_type' => 'primary',
    ];

    return $form;

  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    // No validation.
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Save global configurations.
    Drupal::configFactory()->getEditable('search_autocomplete.settings')
      ->set('admin_helper', $form_state->getValue('admin_helper'))
      ->save();

    foreach ($form_state->getValue($this->entitiesKey) as $id => $value) {
      if (isset($this->entities[$id])) {
        $this->entities[$id]->setStatus($value['enabled']);
        $this->entities[$id]->save();
      }
    }
  }
}

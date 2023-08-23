<?php

namespace Drupal\search_autocomplete\Form;

use Drupal;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Views;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AutocompletionConfigurationEditForm
 *
 * Provides the edit form for our AutocompletionConfiguration entity.
 *
 * @package Drupal\search_autocomplete\Form
 *
 * @ingroup search_autocomplete
 */
class AutocompletionConfigurationEditForm extends AutocompletionConfigurationFormBase {

  /**
   * Returns the actions provided by this form.
   *
   * For the edit form, we only need to change the text of the submit button.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   An associative array containing the current state of the form.
   *
   * @return array
   *   An array of supported actions for the current entity form.
   */
  public function actions(array $form, FormStateInterface $form_state) {
    $actions = parent::actions($form, $form_state);
    $actions['submit']['#value'] = $this->t('Update');
    return $actions;
  }

  /**
   * Overrides Drupal\Core\Entity\EntityFormController::form() and
   * Drupal\search_autocomplete\Form\AutocompletionConfigurationFormBase::form()
   *
   * Builds the entity add form.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param array $form_state
   *   An associative array containing the current state of the form.
   *
   * @return array
   *   An associative array containing the autocompletion_configuration
   *   add/edit form.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    // Get anything we need from the base class.
    $form = parent::buildForm($form, $form_state);

    // ------------------------------------------------------------------.
    // HOW - How to display Search Autocomplete suggestions.
    $form['search_autocomplete_how'] = [
      '#type' => 'details',
      '#title' => $this->t('HOW - How to display Search Autocomplete suggestions?'),
      '#collapsible' => TRUE,
      '#open' => FALSE,
    ];
    // Minimum characters to set autocompletion on.
    $form['search_autocomplete_how']['minChar'] = [
      '#type' => 'number',
      '#title' => $this->t('Minimum keyword size that uncouple autocomplete search'),
      '#description' => $this->t('Please enter the minimum number of character a user must input before autocompletion starts.'),
      '#default_value' => $this->entity->getMinChar(),
      '#maxlength' => 2,
      '#required' => TRUE,
    ];
    // Number of suggestions to display.
    $form['search_autocomplete_how']['maxSuggestions'] = [
      '#type' => 'number',
      '#title' => $this->t('Limit of the autocomplete search result'),
      '#description' => $this->t('Please enter the maximum number of suggestion to display.'),
      '#default_value' => $this->entity->getMaxSuggestions(),
      '#maxlength' => 2,
      '#required' => TRUE,
    ];

    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['autoSubmit'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Auto Submit'),
      '#description' => $this->t('If enabled, the form will be submitted automatically as soon as your user choose a suggestion in the popup list.'),
      '#default_value' => $this->entity->getAutoSubmit(),
    ];
    // Check if form should be auto redirected.
    $form['search_autocomplete_how']['autoRedirect'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Auto Redirect'),
      '#description' => $this->t('If enabled, the user will be directly routed to the suggestion he chooses instead of performing form validation process. Only works if "link" attribute is existing and if "Auto Submit" is enabled.'),
      '#default_value' => $this->entity->getAutoRedirect(),
    ];

    // ###
    // "View all results" custom configurations.
    $form['search_autocomplete_how']['moreResultsSuggestion'] = [
      '#type' => 'details',
      '#title' => $this->t('Custom behaviour when some suggestions are available'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    ];
    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['moreResultsSuggestion']['moreResultsLabel'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom "view all results" message label'),
      '#description' => $this->t('This message is going to be displayed at the end of suggestion list when suggestions are found.') . $this->t('Leave empty to disable this functionality.') . '<br/>' . $this->t('You can use HTML tags as well as the token [search-phrase] to replace user input or [search-count] to replace the number of matching results.'),
      '#default_value' => $this->t($this->entity->getMoreResultsLabel()),
      '#maxlength' => 255,
      '#required' => FALSE,
    ];
    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['moreResultsSuggestion']['moreResultsValue'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom "view all results" message value'),
      '#description' => $this->t('If a label is filled above, this is the value that will be picked when the message is selected.') . $this->t('Leave empty if you don\'t want the message to be selectable.') . '<br/>' . $this->t('You can use the token [search-phrase] to replace user input.'),
      '#default_value' => $this->t($this->entity->getMoreResultsValue()),
      '#maxlength' => 255,
      '#required' => FALSE,
    ];
    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['moreResultsSuggestion']['moreResultsLink'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom "view all results" URL redirection'),
      '#description' => $this->t('If "Auto redirect" is checked and an URL is given for this configuration, the user will be redirected to this URL when the message is clicked. Leave empty if you rather like a standard Drupal behavior.'),
      '#default_value' => $this->t($this->entity->getMoreResultsLink()),
      '#maxlength' => 255,
      '#required' => FALSE,
    ];

    // ###
    // "No resuls" custom configurations.
    $form['search_autocomplete_how']['noResultSuggestion'] = [
      '#type' => 'details',
      '#title' => $this->t('Custom behaviour when no suggestions are found'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    ];
    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['noResultSuggestion']['noResultLabel'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom "no result" message label'),
      '#description' => $this->t('This message is going to be displayed when no suggestions can be found.') . $this->t('Leave empty to disable this functionality.') . '<br/>' . $this->t('You can use HTML tags as well as the token [search-phrase] to replace user input.'),
      '#default_value' => $this->t($this->entity->getNoResultLabel()),
      '#maxlength' => 255,
      '#required' => FALSE,
    ];
    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['noResultSuggestion']['noResultValue'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom "no result" message value'),
      '#description' => $this->t('If a label is filled above, this is the value that will be picked when the message is selected.') . $this->t('Leave empty if you don\'t want the message to be selectable.') . '<br/>' . $this->t('You can use the token [search-phrase] to replace user input.'),
      '#default_value' => $this->t($this->entity->getNoResultValue()),
      '#maxlength' => 255,
      '#required' => FALSE,
    ];
    // Check if form should be auto submitted.
    $form['search_autocomplete_how']['noResultSuggestion']['noResultLink'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom "no result" URL redirection'),
      '#description' => $this->t('If "Auto redirect" is checked and an URL is given for this configuration, the user will be redirected to this URL when the message is clicked. Leave empty if you rather like a standard Drupal behavior.'),
      '#default_value' => $this->t($this->entity->getNoResultLink()),
      '#maxlength' => 255,
      '#required' => FALSE,
    ];

    // ------------------------------------------------------------------.
    // WHAT - What to display in Search Autocomplete suggestions.
    $form['search_autocomplete_what'] = [
      '#type' => 'details',
      '#title' => $this->t('WHAT - What to display in Search Autocomplete suggestions?'),
      '#description' => $this->t('Choose which data should be added to autocompletion suggestions.'),
      '#collapsible' => TRUE,
      '#open' => TRUE,
    ];
    $form['search_autocomplete_what']['source'] = [
      '#type' => 'textfield',
      '#autocomplete_route_name' => 'search_autocomplete.view_autocomplete',
      '#description' => $this->t('Enter the URL of your callback for suggestions.') . '<br/>' . $this->t('You can enter an internal path such as %node-xx or an external URL such as %url. You can also use autocompletion to target a specific View display.', [
          '%node-xx' => '/node/xx',
          '%url' => 'http://example.com',
        ]),
      '#element_validate' => [[$this, 'validateUriElement']],
      '#default_value' => $this->entity->getSource(),
      '#size' => 80,
      '#attributes' => [
        'data-autocomplete-first-character-blacklist' => '/#?',
      ],
    ];

    // Template to use.
    $themes = [];
    $files = \Drupal::service('file_system')->scanDirectory(\Drupal::service('extension.list.module')->getPath('search_autocomplete') . '/css/themes', '/.*\.css\z/', ['recurse' => FALSE]);
    foreach ($files as $file) {
      $themes[$file->filename] = $file->name;
    }
    $form['search_autocomplete_what']['theme'] = [
      '#type' => 'select',
      '#title' => $this->t('Select a theme for your suggestions'),
      '#options' => $themes,
      '#default_value' => $this->entity->getTheme(),
      '#description' => $this->t('Choose the theme to use for autocompletion dropdown popup. Read <a href="http://drupal-addict.com/nos-projets/search-autocomplete">documentation</a> to learn how to make your own.'),
    ];

    // ------------------------------------------------------------------.
    // ADVANCED - Advanced options.
    $form['search_autocomplete_advanced'] = [
      '#type' => 'details',
      '#title' => $this->t('ADVANCED - Advanced options'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    ];
    $form['search_autocomplete_advanced']['selector'] = [
      '#type' => 'textfield',
      '#title' => $this->t('ID selector for this form'),
      '#description' => $this->t('Please change only if you know what you do, read <a href="http://drupal-addict.com/nos-projets/search-autocomplete">documentation</a> first.'),
      '#default_value' => $this->entity->getSelector(),
      '#maxlength' => 255,
      '#size' => 35,
    ];

    // Return the form.
    return $form;
  }

  /**
   * Validation callback for URI form.
   *
   * @param array $element
   *   The element itself
   * @param FormStateInterface $form_state
   *   The submitted form data.
   */
  public function validateUriElement($element, FormStateInterface $form_state) {
    $source = $form_state->getValue('source');
    $entity_ids = NULL;

    // Check if source input is a valid View display.
    $input_source = explode('::', $source);
    if (count($input_source) == 2) {
      $entity_ids = \Drupal::entityTypeManager()->getStorage('view')->getQuery()
        ->condition('status', TRUE)
        ->condition('id', $input_source[0])
        ->condition("display.*.id", $input_source[1])
        ->execute();
    }
    // If Views are found: it's OK.
    if (!empty($entity_ids)) {
      return;
    }
    // Otherwise, if the source is external URI: it's OK.
    elseif (UrlHelper::isExternal($source)) {
      return;
    }
    // Finally, if the source is not a Drupal path: we have not found the nature
    // of it, so send an error.
    else {
      if (!Drupal::service('path.validator')->isValid($source)) {
        $form_state->setErrorByName('source', $this->t('The input source is not valid. Please enter a Drupal valid path, a View display (using completion) or a valid external URL.'));
      }
    }
  }

  /**
   * Autocomplete the label of a view.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object that contains the typed tags.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The matched entity labels as a JSON response.
   */
  public function viewAutocomplete(Request $request) {
    $matches = [];

    // Retrieve elligible views.
    $displays = Views::getApplicableViews('autocompletion_callback_display');

    // Add the view as a suggestion if meeting user_input
    $options = [];
    foreach ($displays as $data) {
      list($view_id, $display_id) = $data;
      $view = Views::getView($view_id);
      $display = $view->getDisplay();
      $suggestion_value = $view->storage->get('id') . '::' . $display_id;
      $suggestion_label = $view->storage->get('label') . '::' . $display->display['display_title'];
      if (stristr($suggestion_label, $request->query->get('q')) !== FALSE) {
        $matches[] = [
          'value' => $suggestion_value,
          'label' => $suggestion_label,
        ];
      }
    }
    return new JsonResponse($matches);
  }

}

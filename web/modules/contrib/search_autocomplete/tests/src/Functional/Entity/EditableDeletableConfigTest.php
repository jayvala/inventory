<?php

namespace Drupal\Tests\search_autocomplete\Functional\Entity;

use Drupal\Core\Cache\Cache;
use Drupal\search_autocomplete\Entity\AutocompletionConfiguration;
use Drupal\Tests\BrowserTestBase;

/**
 * Test basic CRUD on configurations.
 *
 * @group Search Autocomplete
 *
 * @ingroup seach_auocomplete
 */
class EditableDeletableConfigTest extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'stark';

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = ['node', 'search_autocomplete'];

  /**
   * The configuration factory used in this test.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  public $adminUser;

  /**
   * {@inheritdoc}
   */
  public static function getInfo() {
    return [
      'name' => 'Manage Autocompletion Configuration test.',
      'description' => 'Test the access authorization for editable, deletable config.',
      'group' => 'Search Autocomplete',
    ];
  }

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $this->adminUser = $this->drupalCreateUser(['administer search autocomplete']);
    $this->drupalLogin($this->adminUser);
    $this->configFactory = $this->container->get('config.factory');
  }

  /**
   * Check access authorizations over editable configurations.
   */
  public function testEditableEntity() {

    // Get config setup.
    $config_id = 'search_block';
    $config = $this->configFactory->getEditable($config_id);

    // Verify that editable configuration can be edited on GUI.
    $this->drupalGet('/admin/config/search/search_autocomplete');
    $elements = $this->xpath('//tr[@id="' . $config_id . '"]//div[contains(@class, "dropbutton-widget")]//li');
    $this->assertEquals($elements[0]->getText(), 'Edit', 'Editable config has Edit operation');
    // Check access permission to edit page for editable configurations.
    $this->drupalGet('/admin/config/search/search_autocomplete/manage/' . $config_id);
    $this->assertSession()->statusCodeEquals(200, "Editable configuration can be edited from GUI");

    // Remove editability for this configuration.
    $config = AutocompletionConfiguration::load('search_block');
    $config->setEditable(FALSE);
    $config->save();
    \Drupal::service('cache.config')->deleteALl();

    // Verify that none editable configuration cannot be edited on GUI.
    $this->drupalGet('/admin/config/search/search_autocomplete');
    $elements = $this->xpath('//tr[@id="' . $config_id . '"]//div[contains(@class, "dropbutton-widget")]//li');
    $this->assertCount(0, $elements, 'Editable config has Edit operation');

    // Check that none editable configurations cannot be edited.
    $this->drupalGet('/admin/config/search/search_autocomplete/manage/' . $config_id);
    $this->assertSession()->statusCodeEquals(403, "None editable configuration cannot be edited from GUI");
  }

  /**
   * Check access authorizations over deletable configurations.
   */
  public function testDeletableEntity() {

    // Get config setup.
    $config_id = 'search_block';
    $config = AutocompletionConfiguration::load($config_id);
    // $config = $this->configFactory->getEditable("search_autocomplete.autocompletion_configuration:$config_id");

    // Verify that default configuration search_block cannot be edited on GUI.
    $this->drupalGet('/admin/config/search/search_autocomplete');
    $elements = $this->xpath('//tr[@id="' . $config_id . '"]//div[contains(@class, "dropbutton-widget")]//li');
    $this->assertCount(1, $elements, 'Deletable config has Delete operation');
    $this->assertNotEquals($elements[0]->getText(), 'Delete', 'Deletable config has Delete operation');

    // Check access permission to delete page for none deletable configurations.
    $this->drupalGet('/admin/config/search/search_autocomplete/manage/' . $config_id . '/delete');
    $this->assertSession()->statusCodeEquals(403, "None deletable configuration cannot be deleted from GUI");

    // Remove editability for this configuration.
    $config->setDeletable(TRUE);
    $config->save();
    \Drupal::service('cache.config')->deleteALl();

    // Verify that deletable configuration can be deleted from GUI.
    $this->drupalGet('/admin/config/search/search_autocomplete');
    $elements = $this->xpath('//tr[@id="' . $config_id . '"]//div[contains(@class, "dropbutton-widget")]//li');
    $this->assertCount(2, $elements, 'Deletable config has Delete operation');
    $this->assertEquals($elements[1]->getText(), 'Delete', 'Deletable config has Delete operation');

    // Check that deletable configurations can be deleted.
    $this->drupalGet('/admin/config/search/search_autocomplete/manage/' . $config_id . '/delete');
    $this->assertSession()->statusCodeEquals(200, "Deletable configuration can be deleted from GUI");
  }
}

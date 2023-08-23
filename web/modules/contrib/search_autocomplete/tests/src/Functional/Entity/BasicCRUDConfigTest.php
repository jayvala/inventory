<?php

namespace Drupal\Tests\search_autocomplete\Functional\Entity;

use Drupal\Tests\BrowserTestBase;

/**
 * Test basic CRUD on configurations.
 *
 * @group Search Autocomplete
 *
 * @ingroup seach_auocomplete
 */
class BasicCRUDConfigTest extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'stark';

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = ['block', 'node', 'search_autocomplete'];

  /**
   * Stores a user admin.
   *
   * @var \Drupal\user\Entity\User
   */
  public $adminUser;

  /**
   * {@inheritdoc}
   */
  public static function getInfo() {
    return [
      'name' => 'Manage Autocompletion Configuration test.',
      'description' => 'Test is autocompletion configurations can be added/edited/deleted.',
      'group' => 'Search Autocomplete',
    ];
  }

  /**
   * Check that autocompletion configurations can be added/edited/deleted.
   *
   * 1) Verify that we can add new configuration through admin UI.
   *
   * 2) Verify that add redirect to edit page.
   *
   * 3) Verify that default add configuration values are inserted.
   *
   * 4) Verify that user is redirected to listing page.
   *
   * 5) Verify that we can edit the configuration through admin UI.
   */
  public function testManageConfigEntity() {

    // ----------------------------------------------------------------------
    // 1) Verify that we can add new configuration through admin UI.
    // We  have the admin user logged in (through test setup), so we'll create
    // a new configuration.
    $this->drupalGet('/admin/config/search/search_autocomplete');

    // Check that action link is now there and click 'Add new' button.
    $this->clickLink('Add new Autocompletion Configuration');

    // Build a configuration data.
    $config_name = 'testing_config';
    $config = [
      'label' => 'Unit testing configuration',
      'selector' => '#test-key',
      'minChar' => '3',
      'maxSuggestions' => '10',
      'autoSubmit' => TRUE,
      'autoRedirect' => TRUE,
      'noResultLabel' => 'No results found for [search-phrase]. Click to perform full search.',
      'noResultValue' => '[search-phrase]',
      'noResultLink' => '',
      'moreResultsLabel' => 'View all results for [search-phrase].',
      'moreResultsValue' => '[search-phrase]',
      'moreResultsLink' => '',
      'source' => 'autocompletion_callbacks_nodes::nodes_autocompletion_callback',
      'theme' => 'basic.css',
    ];

    $this->submitForm([
      'label' => $config['label'],
      'id' => $config_name,
      'selector' => $config['selector'],
    ], 'Create Autocompletion Configuration');

    // ----------------------------------------------------------------------
    // 2) Verify that add redirect to edit page.
    $this->assertSession()->addressEquals('/admin/config/search/search_autocomplete/manage/' . $config_name);

    // ----------------------------------------------------------------------
    // 3) Verify that default add configuration values are inserted.
    $this->assertSession()->fieldValueEquals('label', $config['label']);
    $this->assertSession()->fieldValueEquals('selector', $config['selector']);
    $this->assertSession()->fieldValueEquals('minChar', $config['minChar']);
    $this->assertSession()->fieldValueEquals('maxSuggestions', $config['maxSuggestions']);
    $this->assertSession()->fieldValueEquals('autoSubmit', $config['autoSubmit']);
    $this->assertSession()->fieldValueEquals('autoRedirect', $config['autoRedirect']);
    $this->assertSession()->fieldValueEquals('noResultLabel', $config['noResultLabel']);
    $this->assertSession()->fieldValueEquals('noResultValue', $config['noResultValue']);
    $this->assertSession()->fieldValueEquals('noResultLink', $config['noResultLink']);
    $this->assertSession()->fieldValueEquals('moreResultsLabel', $config['moreResultsLabel']);
    $this->assertSession()->fieldValueEquals('moreResultsValue', $config['moreResultsValue']);
    $this->assertSession()->fieldValueEquals('moreResultsLink', $config['moreResultsLink']);
    $this->assertSession()->fieldValueEquals('source', $config['source']);
    $this->assertTrue($this->assertSession()->optionExists('edit-theme', $config['theme'])->hasAttribute('selected'));

    // Change default values.
    $config['minChar'] = 1;
    $config['noResultLabel'] = 'No result test label.';
    $config['autoRedirect'] = FALSE;
    $config['moreResultsLink'] = 'http://google.com';
    $config['source'] = '/user/' . $this->adminUser->id();

    $this->submitForm($config, 'Update');

    // ----------------------------------------------------------------------
    // 4) Verify that user is redirected to listing page.
    $this->assertSession()->addressEquals('/admin/config/search/search_autocomplete');

    // ----------------------------------------------------------------------
    // 5) Verify that we can edit the configuration through admin UI.
    $this->drupalGet('/admin/config/search/search_autocomplete/manage/' . $config_name);
    $this->assertSession()->fieldValueEquals('label', $config['label']);
    $this->assertSession()->fieldValueEquals('selector', $config['selector']);
    $this->assertSession()->fieldValueEquals('minChar', $config['minChar']);
    $this->assertSession()->fieldValueEquals('maxSuggestions', $config['maxSuggestions']);
    $this->assertSession()->fieldValueEquals('autoSubmit', $config['autoSubmit']);
    $this->assertSession()->fieldValueEquals('autoRedirect', $config['autoRedirect']);
    $this->assertSession()->fieldValueEquals('noResultLabel', $config['noResultLabel']);
    $this->assertSession()->fieldValueEquals('noResultValue', $config['noResultValue']);
    $this->assertSession()->fieldValueEquals('noResultLink', $config['noResultLink']);
    $this->assertSession()->fieldValueEquals('moreResultsLabel', $config['moreResultsLabel']);
    $this->assertSession()->fieldValueEquals('moreResultsValue', $config['moreResultsValue']);
    $this->assertSession()->fieldValueEquals('moreResultsLink', $config['moreResultsLink']);
    $this->assertSession()->fieldValueEquals('source', $config['source']);
    $this->assertTrue($this->assertSession()->optionExists('edit-theme', $config['theme'])->hasAttribute('selected'));

  }

  /**
   * Check that none selector autocompletion configurations can be
   * added/edited/deleted.
   *
   * 1) Verify that we can add new configuration through admin UI.
   *
   * 2) Verify that add redirect to edit page.
   *
   * 3) Verify that default add configuration values are inserted.
   *
   * 4) Verify that user is redirected to listing page.
   *
   * 5) Verify that we can edit the configuration through admin UI.
   */
  public function testManageNoSelectorConfigEntity() {

    // ----------------------------------------------------------------------
    // 1) Verify that we can add new configuration through admin UI.
    // We  have the admin user logged in (through test setup), so we'll create
    // a new configuration.
    $this->drupalGet('/admin/config/search/search_autocomplete');

    // Click Add new button.
    $this->clickLink('Add new Autocompletion Configuration');

    // Build a configuration data.
    $config_name = 'testing_config';
    $config = [
      'label' => 'Unit testing configuration',
      'selector' => '',
      'minChar' => 3,
      'maxSuggestions' => 10,
      'autoSubmit' => TRUE,
      'autoRedirect' => TRUE,
      'noResultLabel' => 'No results found for [search-phrase]. Click to perform full search.',
      'noResultValue' => '[search-phrase]',
      'noResultLink' => '',
      'moreResultsLabel' => 'View all results for [search-phrase].',
      'moreResultsValue' => '[search-phrase]',
      'moreResultsLink' => '',
      'source' => 'autocompletion_callbacks_nodes::nodes_autocompletion_callback',
      'theme' => 'basic.css',
    ];

    $this->submitForm([
      'label' => $config['label'],
      'id' => $config_name,
      'selector' => $config['selector'],
    ], 'Create Autocompletion Configuration');

    // ----------------------------------------------------------------------
    // 2) Verify that add redirect to edit page.
    $this->assertSession()->addressEquals('/admin/config/search/search_autocomplete/manage/' . $config_name);

    // ----------------------------------------------------------------------
    // 3) Verify that default add configuration values are inserted.
    $this->assertSession()->fieldValueEquals('label', $config['label']);
    $this->assertSession()->fieldValueEquals('selector', $config['selector']);
    $this->assertSession()->fieldValueEquals('minChar', $config['minChar']);
    $this->assertSession()->fieldValueEquals('maxSuggestions', $config['maxSuggestions']);
    $this->assertSession()->fieldValueEquals('autoSubmit', $config['autoSubmit']);
    $this->assertSession()->fieldValueEquals('autoRedirect', $config['autoRedirect']);
    $this->assertSession()->fieldValueEquals('noResultLabel', $config['noResultLabel']);
    $this->assertSession()->fieldValueEquals('noResultValue', $config['noResultValue']);
    $this->assertSession()->fieldValueEquals('noResultLink', $config['noResultLink']);
    $this->assertSession()->fieldValueEquals('moreResultsLabel', $config['moreResultsLabel']);
    $this->assertSession()->fieldValueEquals('moreResultsValue', $config['moreResultsValue']);
    $this->assertSession()->fieldValueEquals('moreResultsLink', $config['moreResultsLink']);
    $this->assertSession()->fieldValueEquals('source', $config['source']);
    $this->assertTrue($this->assertSession()->optionExists('edit-theme', $config['theme'])->hasAttribute('selected'));

    // Change default values.
    $config['minChar'] = 1;
    $config['noResultLabel'] = 'No result test label.';
    $config['autoRedirect'] = FALSE;
    $config['moreResultsLink'] = 'http://google.com';
    $config['source'] = '/user/' . $this->adminUser->id();

    $this->submitForm($config, 'Update');

    // ----------------------------------------------------------------------
    // 4) Verify that user is redirected to listing page.
    $this->assertSession()->addressEquals('/admin/config/search/search_autocomplete');
    $this->assertSession()->responseContains("<td>Unit testing configuration</td>");

    // ----------------------------------------------------------------------
    // 5) Verify that we can edit the configuration through admin UI.
    $this->drupalGet('/admin/config/search/search_autocomplete/manage/' . $config_name);
    $this->assertSession()->fieldValueEquals('label', $config['label']);
    $this->assertSession()->fieldValueEquals('selector', $config['selector']);
    $this->assertSession()->fieldValueEquals('minChar', $config['minChar']);
    $this->assertSession()->fieldValueEquals('maxSuggestions', $config['maxSuggestions']);
    $this->assertSession()->fieldValueEquals('autoSubmit', $config['autoSubmit']);
    $this->assertSession()->fieldValueEquals('autoRedirect', $config['autoRedirect']);
    $this->assertSession()->fieldValueEquals('noResultLabel', $config['noResultLabel']);
    $this->assertSession()->fieldValueEquals('noResultValue', $config['noResultValue']);
    $this->assertSession()->fieldValueEquals('noResultLink', $config['noResultLink']);
    $this->assertSession()->fieldValueEquals('moreResultsLabel', $config['moreResultsLabel']);
    $this->assertSession()->fieldValueEquals('moreResultsValue', $config['moreResultsValue']);
    $this->assertSession()->fieldValueEquals('moreResultsLink', $config['moreResultsLink']);
    $this->assertSession()->fieldValueEquals('source', $config['source']);
    $this->assertTrue($this->assertSession()->optionExists('edit-theme', $config['theme'])->hasAttribute('selected'));

    // ----------------------------------------------------------------------
    // 6) Verify that we can delete the configuration.
    $this->drupalGet("/admin/config/search/search_autocomplete/manage/" . $config_name . "/delete");
    $this->assertSession()->pageTextContains('This action cannot be undone.');
    $this->submitForm([], 'Delete this configuration');
    $this->assertSession()->responseContains('The autocompletion configuration <em class="placeholder">' . $config['label'] . '</em> is deleted.');
    $this->assertSession()->responseNotContains("<td>Unit testing configuration</td>");
  }

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    // Create admin user.
    $this->adminUser = $this->drupalCreateUser(['administer search autocomplete']);
    // Log user as admin.
    $this->drupalLogin($this->adminUser);
    // Place the local_actions_block in content.
    $this->drupalPlaceBlock('local_actions_block', ['region' => 'content']);
  }

}

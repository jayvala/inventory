<?php

namespace Drupal\Tests\search_autocomplete\Functional\Entity;

use Drupal\Tests\BrowserTestBase;

/**
 * Test special cases of configurations.
 *
 * @group Search Autocomplete
 *
 * @ingroup seach_auocomplete
 */
class NoSelectorConfigTest extends BrowserTestBase {

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

  public $adminUser;

  /**
   * {@inheritdoc}
   */
  public static function getInfo() {
    return [
      'name' => 'Test Autocompletion Configuration test.',
      'description' => 'Test special autocompletion configurations scenario.',
      'group' => 'Search Autocomplete',
    ];
  }

  /**
   * Test addition with default values from URL.
   */
  public function testAdditionFromUrl() {

    // Add new from URL.
    $options = [
      'query' => [
        'label' => 'test label',
        'selector' => 'input#edit',
      ],
    ];
    $this->drupalGet('admin/config/search/search_autocomplete/add', $options);

    $config_name = "testing_from_url";
    $config = [
      'label' => 'test label',
      'selector' => 'input#edit',
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

    // Check fields.
    $this->assertSession()->fieldValueEquals('label', $config['label']);
    $this->assertSession()->fieldValueEquals('selector', $config['selector']);

    // Click Add new button.
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

  }

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $this->adminUser = $this->drupalCreateUser(['administer search autocomplete']);
    $this->drupalLogin($this->adminUser);
  }

}

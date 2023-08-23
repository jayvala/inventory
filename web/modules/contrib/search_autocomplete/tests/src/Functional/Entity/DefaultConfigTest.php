<?php

namespace Drupal\Tests\search_autocomplete\Functional\Entity;

use Drupal\search_autocomplete\Entity\AutocompletionConfiguration;
use Drupal\Tests\BrowserTestBase;

/**
 * Test default configurations.
 *
 * @group Search Autocomplete
 *
 * @ingroup seach_auocomplete
 */
class DefaultConfigTest extends BrowserTestBase {

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
   * {@inheritdoc}
   */
  public static function getInfo() {
    return [
      'name' => 'Default Entity inclusion tests.',
      'description' => 'Test the inclusion of default configurations.',
      'group' => 'Search Autocomplete',
    ];
  }

  /**
   * Check that default entities are properly included.
   *
   * 1) check for search_block default configuration.
   */
  public function testDefaultConfigEntityInclusion() {

    // Build a configuration data.
    $config = [
      'id' => 'search_block',
      'label' => 'Search Block',
      'selector' => '',
      'status' => TRUE,
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
      'editable' => TRUE,
      'deletable' => FALSE,
    ];

    // ----------------------------------------------------------------------
    // 1) Verify that the search_block default config is properly added.
    $entity = AutocompletionConfiguration::load($config['id']);
    $this->assertNotNull($entity, 'Default configuration search_block created during installation process.');

    $this->assertEquals($entity->id(), $config['id']);
    $this->assertEquals($entity->label(), $config['label']);
    $this->assertEquals($entity->getStatus(), $config['status']);
    $this->assertEquals($entity->getSelector(), $config['selector']);
    $this->assertEquals($entity->getMinChar(), $config['minChar']);
    $this->assertEquals($entity->getMaxSuggestions(), $config['maxSuggestions']);
    $this->assertEquals($entity->getAutoSubmit(), $config['autoSubmit']);
    $this->assertEquals($entity->getAutoRedirect(), $config['autoRedirect']);
    $this->assertEquals($entity->getNoResultLabel(), $config['noResultLabel']);
    $this->assertEquals($entity->getNoResultValue(), $config['noResultValue']);
    $this->assertEquals($entity->getNoResultLink(), $config['noResultLink']);
    $this->assertEquals($entity->getMoreResultsLabel(), $config['moreResultsLabel']);
    $this->assertEquals($entity->getMoreResultsValue(), $config['moreResultsValue']);
    $this->assertEquals($entity->getMoreResultsLink(), $config['moreResultsLink']);
    $this->assertEquals($entity->getSource(), $config['source']);
    $this->assertEquals($entity->getTheme(), $config['theme']);
    $this->assertEquals($entity->getEditable(), $config['editable']);
    $this->assertEquals($entity->getDeletable(), $config['deletable']);
  }

}

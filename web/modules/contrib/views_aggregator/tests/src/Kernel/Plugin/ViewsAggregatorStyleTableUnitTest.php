<?php

namespace Drupal\Tests\views_aggregator\Kernel\Plugin;

use Drupal\views\Views;
use Drupal\views\ViewExecutable;
use Drupal\Tests\views\Kernel\Plugin\PluginKernelTestBase;
use Drupal\views\Tests\ViewTestData;
use Symfony\Component\HttpFoundation\Request;

/**
 * Tests the Views Aggregator table style plugin.
 *
 * @group views_agregator
 */
class ViewsAggregatorStyleTableUnitTest extends PluginKernelTestBase {

  /**
   * Views used by this test.
   *
   * @var array
   */
  public static $testViews = ['va_test_style_table'];

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'views',
    'views_aggregator',
    'views_aggregator_test_config',
  ];

  /**
   * Set to TRUE to strict check all configuration saved.
   *
   * @var bool
   *
   * @see \Drupal\Core\Config\Development\ConfigSchemaChecker
   */
  protected $strictConfigSchema = FALSE;

  /**
   * {@inheritdoc}
   */
  protected function setUp($import_test_views = TRUE): void {
    parent::setUp($import_test_views);
    ViewTestData::createTestViews(get_class($this), ['views_aggregator_test_config']);
  }

  /**
   * Tests the Views Aggregator table style.
   */
  public function testViewsAggregatorTable(): void {
    $view = Views::getView('va_test_style_table');
    $view->setDisplay('default');
    $view->initStyle();
    $view->initHandlers();
    $view->initQuery();
    $style_plugin = $view->style_plugin;

    // Test the buildSort() method.
    $request = new Request();
    $view->setRequest($request);

    $style_plugin->options['override'] = FALSE;

    $style_plugin->options['default'] = '';
    $this->assertTrue($style_plugin->buildSort(), 'If no order and no default order is specified, the normal sort should be used.');

    $style_plugin->options['default'] = 'id';
    $this->assertTrue($style_plugin->buildSort(), 'If no order but a default order is specified, the normal sort should be used.');

    $request->attributes->set('order', $this->randomMachineName());
    $this->assertTrue($style_plugin->buildSort(), 'If no valid field is chosen for order, the normal sort should be used.');

    $request->attributes->set('order', 'id');
    $this->assertTrue($style_plugin->buildSort(), 'If a valid order is specified but the table is configured to not override, the normal sort should be used.');

    $style_plugin->options['override'] = TRUE;

    $this->assertFalse($style_plugin->buildSort(), 'If a valid order is specified and the table is configured to override, the normal sort should not be used.');

    // Test the buildSortPost() method.
    $request = new Request();
    $view->setRequest($request);

    // Setup no valid default.
    $this->prepareView($view);
    $style_plugin = $view->style_plugin;
    $style_plugin->options['default'] = '';
    $style_plugin->buildSortPost();
    $this->assertSame($style_plugin->order, NULL, 'No sort order was set, when no order was specified and no default column was selected.');
    $this->assertSame($style_plugin->active, NULL, 'No sort field was set, when no order was specified and no default column was selected.');
    $view->destroy();

    // Setup a valid default + column specific default sort order.
    $this->prepareView($view);
    $style_plugin = $view->style_plugin;
    $style_plugin->options['default'] = 'id';
    $style_plugin->options['info']['id']['default_sort_order'] = 'desc';
    $style_plugin->buildSortPost();
    $this->assertSame($style_plugin->order, 'desc', 'Fallback to the right default sort order.');
    $this->assertSame($style_plugin->active, 'id', 'Fallback to the right default sort field.');
    $view->destroy();

    // Setup a valid default + table default sort order.
    $this->prepareView($view);
    $style_plugin = $view->style_plugin;
    $style_plugin->options['default'] = 'id';
    $style_plugin->options['info']['id']['default_sort_order'] = NULL;
    $style_plugin->options['order'] = 'asc';
    $style_plugin->buildSortPost();
    $this->assertSame($style_plugin->order, 'asc', 'Fallback to the right default sort order.');
    $this->assertSame($style_plugin->active, 'id', 'Fallback to the right default sort field.');
    $view->destroy();

    // Use an invalid field.
    $this->prepareView($view);
    $style_plugin = $view->style_plugin;
    $request->query->set('sort', 'asc');
    $random_name = $this->randomMachineName();
    $request->query->set('order', $random_name);
    $style_plugin->buildSortPost();
    $this->assertSame($style_plugin->order, 'asc', 'No sort order was set, when invalid sort order was specified.');
    $this->assertSame($style_plugin->active, NULL, 'No sort field was set, when invalid sort order was specified.');
    $view->destroy();

    // Use a existing field, and sort both ascending and descending.
    foreach (['asc', 'desc'] as $order) {
      $this->prepareView($view);
      $style_plugin = $view->style_plugin;
      $request->query->set('sort', $order);
      $request->query->set('order', 'id');
      $style_plugin->buildSortPost();
      $this->assertSame($style_plugin->order, $order, 'Ensure the right sort order was set.');
      $this->assertSame($style_plugin->active, 'id', 'Ensure the right order was set.');
      $view->destroy();
    }

    $view->destroy();

    // Excluded field to make sure its wrapping td doesn't show.
    $this->prepareView($view);
    $view->field['name']->options['exclude'] = TRUE;
    $output = $view->preview();
    $output = \Drupal::service('renderer')->renderRoot($output);
    $this->assertFalse(strpos($output, 'views-field-name') !== FALSE, "Excluded field's wrapper was not rendered.");
    $view->destroy();

    // Render a non empty result, and ensure that the empty area handler is not
    // rendered.
    $this->executeView($view);
    $output = $view->preview();
    $output = \Drupal::service('renderer')->renderRoot($output);

    $this->assertFalse(strpos($output, 'custom text') !== FALSE, 'Empty handler was not rendered on a non empty table.');

    // Render an empty result, and ensure that the area handler is rendered.
    $view->setDisplay('default');
    $view->executed = TRUE;
    $view->result = [];
    $output = $view->preview();
    $output = \Drupal::service('renderer')->renderRoot($output);

    $this->assertTrue(strpos($output, 'custom text') !== FALSE, 'Empty handler got rendered on an empty table.');
  }

  /**
   * Prepares a view executable by initializing everything which is needed.
   *
   * @param \Drupal\views\ViewExecutable $view
   *   The executable to prepare.
   */
  protected function prepareView(ViewExecutable $view): void {
    $view->setDisplay();
    $view->initStyle();
    $view->initHandlers();
    $view->initQuery();
  }

}

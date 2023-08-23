<?php

namespace Drupal\views_timestamp_to_date\Plugin\views\field;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\field\Date;
use Drupal\views\ResultRow;

/**
 * Field handler to flag the node type.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("field_views_timestamp_to_date")
 */
class TimestampToDate extends Date {

  /**
   * {@inheritdoc}
   */
  public function query() {}

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['timestamp_field'] = ['default' => NULL];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
    $form['timestamp_field'] = [
      '#type' => 'select',
      '#title' => $this->t('Timestamp Field'),
      '#options' => $this->displayHandler->getFieldLabels(),
      '#default_value' => $this->options['timestamp_field'],
      '#description' => $this->t('Select the field that contains the timestamp.'),
      '#weight' => -10,
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $timestamp_field = $this->options['timestamp_field'];
    $value = $values->{$this->view->storage->get('base_table') . '_' . $timestamp_field};

    $format = $this->options['date_format'];
    if (in_array($format, ['custom', 'raw time ago', 'time ago', 'raw time hence', 'time hence', 'raw time span', 'time span', 'raw time span', 'inverse time span', 'time span'])) {
      $custom_format = $this->options['custom_date_format'];
    }

    if ($value) {
      $timezone = !empty($this->options['timezone']) ? $this->options['timezone'] : NULL;
      // Will be positive for a datetime in the past (ago), and negative for a
      // datetime in the future (hence).
      $time_diff = \Drupal::time()->getRequestTime() - $value;
      switch ($format) {
        case 'raw time ago':
          return $this->dateFormatter->formatTimeDiffSince($value, ['granularity' => is_numeric($custom_format) ? $custom_format : 2]);

        case 'time ago':
          return $this->t('%time ago', ['%time' => $this->dateFormatter->formatTimeDiffSince($value, ['granularity' => is_numeric($custom_format) ? $custom_format : 2])]);

        case 'raw time hence':
          return $this->dateFormatter->formatTimeDiffUntil($value, ['granularity' => is_numeric($custom_format) ? $custom_format : 2]);

        case 'time hence':
          return $this->t('%time hence', ['%time' => $this->dateFormatter->formatTimeDiffUntil($value, ['granularity' => is_numeric($custom_format) ? $custom_format : 2])]);

        case 'raw time span':
          return ($time_diff < 0 ? '-' : '') . $this->dateFormatter->formatTimeDiffSince($value, ['strict' => FALSE, 'granularity' => is_numeric($custom_format) ? $custom_format : 2]);

        case 'inverse time span':
          return ($time_diff > 0 ? '-' : '') . $this->dateFormatter->formatTimeDiffSince($value, ['strict' => FALSE, 'granularity' => is_numeric($custom_format) ? $custom_format : 2]);

        case 'time span':
          $time = $this->dateFormatter->formatTimeDiffSince($value, ['strict' => FALSE, 'granularity' => is_numeric($custom_format) ? $custom_format : 2]);
          return ($time_diff < 0) ? $this->t('%time hence', ['%time' => $time]) : $this->t('%time ago', ['%time' => $time]);

        case 'custom':
          if ($custom_format == 'r') {
            return $this->dateFormatter->format($value, $format, $custom_format, $timezone, 'en');
          }
          return $this->dateFormatter->format($value, $format, $custom_format, $timezone);

        default:
          return $this->dateFormatter->format($value, $format, '', $timezone);
      }
    }
  }

}

<?php

namespace Drupal\custom_module\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
* Provides a 'Front counter' Block.
*
* @Block(
*   id = "front_counter_block",
*   admin_label = @Translation("Front counter block"),
*   category = @Translation("custom block example"),
* )
*/
class FrontCounter extends BlockBase {

 /**
  * {@inheritdoc}
  */
 public function build() {
   return [
     '#markup' => $this->t('This simple message coming from custom block'),
   ];
 }
}
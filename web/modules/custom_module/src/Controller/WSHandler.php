<?php

namespace Drupal\custom_module\Controller;

use Drupal\Core\File\FileSystemInterface;
use Drupal\file\Entity\File;
use Symfony\Component\HttpFoundation\Response;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\webform\Entity\Webform;
use Drupal\webform\Entity\WebformSubmission;
use Drupal\node\Entity\Node;

class WSHandler {

  public function build() {
    // $current_time = \Drupal::time()->getCurrentTime();
    // date_default_timezone_set('GMT');
    // $oneweekago = strtotime("-1 week");
    $webform = Webform::load('product_stock_update');
    $storage = \Drupal::entityTypeManager()->getStorage('webform_submission');
    $result = $storage->getQuery()
                      //->condition('created', $oneweekago, '>=')
                      ->condition('webform_id', 'product_stock_update')
                      ->sort('created')
                      ->execute();
    
    $submission_data = [];
    foreach ($result as $item) {
      $submission = WebformSubmission::load($item);
      $submission_data[] = $submission->getData();
    }
    foreach($submission_data as $key => $value) {
      if($submission_data[$key]['product_title'] > 0){
        $submission_data[$key]['product_title'] = Node::load($submission_data[$key]['product_title'])->label();
      }

      if($submission_data[$key]['variant'] > 0){
        $submission_data[$key]['variant'] = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($submission_data[$key]['variant'])->name->value;
      }
    }
    // $krows = array_keys($result);
    // foreach($krows as $key=>$value) {
    //   $webform = $storage->load($value);
    //   $rows[] = $webform->getData();
    // }
    dump($submission_data);
    exit;

    return new Response(
      'CSV file has been generated and mail send it to authenticated persons.', 
       Response::HTTP_OK
    );
  }
}

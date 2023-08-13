<?php

declare(strict_types=1);
namespace App;

require_once 'headers.php';
require_once '../vendor/autoload.php';

use App\Plan;

if(isset($_POST['username']) && isset($_POST['planTitle'])) {
    send();
}

function send() {
    $plan = new Plan();
    $plan -> setUsername($_POST['username']) -> setPlanTitle($_POST['planTitle']);
    
    if($plan -> sendData()) {
        echo json_encode(['msg' => 'success']);
    }
    else {
        echo json_encode(['err' => 'error']);
    }

    $_POST = array();
}

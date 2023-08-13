<?php

declare(strict_types=1);
namespace App;

require_once 'headers.php';
require_once '../vendor/autoload.php';

use App\Plan;

if(isset($_POST['username'])) {
    get();
}

function get() {
    $plan = new Plan();

    $plan -> setUsername($_POST['username']);

    if($plan -> getData()) {
        echo json_encode(['msg' => $plan -> getData()]);
    }
    else {
        echo json_encode(['err' => 'error']);
    }

    $_POST = array();
}
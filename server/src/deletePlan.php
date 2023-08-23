<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';
require_once 'headers.php';

use App\Plan;

if(isset($_POST)) {
    deletePlan();
}

function deletePlan() {
    $plan = new Plan();
    $plan -> setUsername($_POST['username']) -> setPlanTitle($_POST['planTitle']);

    if($plan -> deleteData()) {
        echo json_encode(['msg' => "success"]);
    }

    else {
        echo json_encode(["err" => "error"]);
    }

    $_POST = array();
}
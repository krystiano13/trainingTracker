<?php

declare(strict_types=1);
namespace App;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

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
}
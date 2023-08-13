<?php

declare(strict_types=1);
namespace App;

require_once "../vendor/autoload.php";
require_once "headers.php";

use App\Exercise;

if(isset($_POST)) {
    $exercise = new Exercise();
    $exercise -> setUsername($_POST['username']);
    $exercise -> setPlan($_POST['plan']);

    if($exercise -> checkIfExists()) {
        if($exercise -> getExercises()) {
            echo json_encode(['msg' => $exercise -> getExercises()]);
        }
        else {
            echo json_encode(['err' => 'error']);
        }
    }
    else {
        echo json_encode(['err' => 'error']);
    }

    $_POST = array();
}
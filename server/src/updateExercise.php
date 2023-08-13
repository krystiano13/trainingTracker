<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';
require_once 'headers.php';

use App\Exercise;

if(isset($_POST)) {
    $exercise = new Exercise();

    $exercise -> setUsername($_POST['username']);
    $exercise -> setPlan($_POST['plan']);
    $exercise -> setId((int)$_POST['id']);

    $exercise -> setExerciseData(
        array(
            "id" => $_POST['id'],
            "name" => $_POST['name'],
            "sets" => $_POST["sets"],
            "reps" => $_POST["reps"],
            "weight" => $_POST["weight"],
        )
    );

    if($exercise -> updateExercise()) {
        echo json_encode(['msg' => 'success']);
    }
    else {
        echo json_encode(['err' => 'error']);
    }

  $_POST = array();
}
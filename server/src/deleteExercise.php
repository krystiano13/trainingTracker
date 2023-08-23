<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';
require_once 'headers.php';

use App\Exercise;

if(isset($_POST)) {
    remove();
    $_POST = array();
}

function remove() {
    $exercise = new Exercise();
    $exercise -> setId($_POST['id']);

    if($exercise -> deleteExercise()) {
        echo json_encode(['msg' => 'success']);
    }

    else {
        echo json_encode(['err' => 'error']);
    } 
}
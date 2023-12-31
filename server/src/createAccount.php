<?php

declare(strict_types=1);
namespace App;

require_once 'headers.php';
require_once '../vendor/autoload.php';

use App\Register;

if(
    isset($_POST['username']) &&
    isset($_POST['password']) &&
    isset($_POST['password2'])
) {
    $user = (string)$_POST['username'];
    $pass1 = (string)$_POST['password'];
    $pass2 = (string)$_POST['password2'];

    $register = new Register();

    $register
        -> setUsername($user)
        -> setPassword($pass1)
        -> setSecondPassword($pass2);
    
    if(!$register -> validate()) {
        echo json_encode(['err' => 'error']);
    }
    else {
        if($register -> create()) {
            echo json_encode(['msg' => 'success']);
        }
        else {
            echo json_encode(['err' => 'error']);
        }
    }

    $_POST = array();
}
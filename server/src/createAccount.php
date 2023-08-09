<?php

declare(strict_types=1);
namespace App;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once realpath('vendor/autoload.php');

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
}
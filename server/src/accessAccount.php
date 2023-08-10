<?php

declare(strict_types=1);
namespace App;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../vendor/autoload.php';

use App\Login;

if(
    isset($_POST['username']) &&
    isset($_POST['password'])
) {
    $login = new Login();

    $login
        ->setUsername($_POST['username'])
        ->setPassword($_POST['password']);

    if($login -> validateAndLogin()) {
        echo json_encode(['msg' => 'success', 'user' => $_POST['username']]);
    }
    else {
        echo json_encode(['err' => 'error']);
    }
}
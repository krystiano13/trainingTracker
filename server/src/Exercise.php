<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';
use App\Connect;

final class Exercise {
    private string $username;
    private string $plan;
    private $connect;

    public function __contruct() {
        $this -> connect = new Connect();
    }

    public function checkIfExists() {
        $this -> connect -> start();
        $checkQuery = $this -> connect -> connection -> prepare(
            "SELECT username, title FROM plans WHERE username=:user AND title=:plan" 
        );
        $checkQuery -> bindValue(':user', $this -> username);
        $checkQuery -> bindValue(':plan', $this -> plan);

        if($checkQuery -> execute()) {
            if($checkQuery -> rowCount() != 1) return false;
            return true;
        } 
        else return false;
    }

    public function setUsername(string $name):void {
        $this -> username = $name;
    } 

    public function setPlan(string $plan):void {
        $this -> plan = $plan;
    }
}
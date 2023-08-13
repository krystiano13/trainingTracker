<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';

final class Exercise {
    private string $username;
    private string $plan;

    public function setUsername(string $name) {
        $this -> username = $name;
    } 

    public function setPlan(string $plan) {
        $this -> plan = $plan;
    }
}
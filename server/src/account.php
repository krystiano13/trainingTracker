<?php

namespace App;
require_once '../vendor/autoload.php';

abstract class Account {
    private string $username;
    private string $password;

    public function setUsername(string $name):self {
        $this -> username = $name;
        return $this;
    } 

    public function setPassword(string $name):self {
        $this -> password = $name;
        return $this;
    }
}
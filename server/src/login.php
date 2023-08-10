<?php

namespace App;
require_once '../vendor/autoload.php';

use App\Connect;

class Login {
    private string $username;
    private string $password;

    public function validateAndLogin():bool {
        $this -> username = htmlentities($this -> username);
        $this -> password = htmlentities($this -> password);

        
    }

    public function setUsername(string $name):self {
        $this -> username = $name;
        return $this;
    } 

    public function setPassword(string $name):self {
        $this -> password = $name;
        return $this;
    }
}

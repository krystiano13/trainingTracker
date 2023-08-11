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

        $connect = new Connect();
        $connect -> start();

        $query = $connect -> connection -> prepare(
            "SELECT username, password FROM accounts WHERE username=:user"
        );

        $query -> bindValue(':user',$this -> username);

        if($query -> execute()) {
            if($query -> rowCount() <= 0) return false;
            $result = $query -> fetchAll();
            
            if(password_verify($this -> password, $result[0]['password']))
                return true;
            else 
                return false;
        }

        else {
            return false;
        }
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

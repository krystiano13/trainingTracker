<?php

namespace App;
require_once realpath('vendor/autoload.php');

use App\Connect;

class Register {
    private string $username;
    private string $password;
    private string $password2;

    public function validate():Register|bool {
        $this->username = htmlentities($this->username);
        $this->password = htmlentities($this->password);
        $this->password2 = htmlentities($this->password2);

        if($this->password !== $this->password2) {
            return false;
        }

        $connect = new Connect();
        $connect -> start();
        $connect -> connection -> prepare(
            "SELECT username from accounts WHERE username=:user"
        );
        $connect -> connection -> bindValue(':user',$this->username);
        $connect -> connection -> execute();

        if($connect -> connection -> rowCount() <= 0) {
            return $this;
        } else return false;
    }

    public function create():bool {
        $sendQuery = new Connect();
        $sendQuery -> connection -> prepare(
            "INSERT INTO account VALUES(NULL,:user,:pass)"
        );
        $sendQuery -> connection -> bindValue(':user',$this->username);
        $sendQuery -> connection -> bindValue(':pass',$this->password);
        
        if($sendQuery -> connection -> execute()) {
            return true;
        }
        else {
            return false;
        }
    }

    public function setUsername(string $name):Register {
        $this -> username = $name;
        return $this;
    } 

    public function setPassword(string $name):Register {
        $this -> password = $name;
        return $this;
    }

    public function setSecondPassword(string $name):Register {
        $this -> password2 = $name;
        return $this;
    }
}

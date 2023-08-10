<?php

namespace App;
require_once '../vendor/autoload.php';

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
        $query =  $connect -> connection -> prepare(
            "SELECT username from accounts WHERE username=:user"
        );
       
        $query -> bindValue(':user',$this->username);
        $query -> execute();

        if($query -> rowCount() <= 0) {
            return $this;
        } else return false;
    }

    public function create():bool {
        $secondConnection = new Connect();
        $secondConnection -> start();
        $sendQuery = $secondConnection -> connection -> prepare(
            "INSERT INTO accounts VALUES(NULL,:user,:pass)"
        );
        $sendQuery -> bindValue(':user',$this->username);
        $sendQuery -> bindValue(':pass',password_hash($this->password, PASSWORD_DEFAULT));
        
        if($sendQuery -> execute()) {
            return true;
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

    public function setSecondPassword(string $name):self {
        $this -> password2 = $name;
        return $this;
    }
}

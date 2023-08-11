<?php 

namespace App;
require_once '../vendor/autoload.php';

use App\Connect;

class Plan {
    private string $username;
    private string $planTitle;

    public function getData() {
        $connect = new Connect();
        $connect -> start();

        $getQuery = $connect -> connection -> prepare(
            "SELECT title,username FROM plans WHERE username=:username"
        );
        $getQuery -> bindValue(':username',$this -> username);

        if($getQuery -> execute()) {
            return $getQuery -> fetchAll();
        }
        else return false;
    }

    public function sendData():bool {
        $connect = new Connect();
        $connect -> start();

        $checkTitle = $connect -> connection -> prepare("SELECT title FROM plans WHERE title=:title");
        $checkTitle -> bindValue(':title',$this->planTitle);
        
        if($checkTitle -> execute()) {
            if($checkTitle -> rowCount() > 0) return false;

            $sendQuery = $connect ->connection -> prepare(
                "INSERT INTO plans VALUES(NULL,:title,:username)"
            );
            $sendQuery -> bindValue(':title',$this->planTitle);
            $sendQuery -> bindValue(':username',$this->username);
            
            if($sendQuery -> execute()) return true;
            else return false;
        } 
        else return false;
    }

    public function setUsername(string $name):self {
        $this->username = $name;
        return $this;
    }

    public function setPlanTitle(string $title):self {
        $this->planTitle = $title;
        return $this;
    }
}

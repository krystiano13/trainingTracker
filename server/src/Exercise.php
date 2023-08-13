<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';
use App\Connect;

final class Exercise {
    private string $username;
    private string $plan;

    private array $exerciseData;

    public function checkIfExists() {
        $connect = new Connect();
        $connect -> start();
        $checkQuery = $connect -> connection -> prepare(
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

    public function createExercise() {
        $connect = new Connect();
        $connect -> start();
        $sendQuery =  $connect -> connection -> prepare(
            "INSERT INTO exercises VALUES(NULL,:user,:plan,:name,:sets,:reps,:weight,:volume,:progress)"
        );

        if(
            $sendQuery -> execute(
            array(
                ":user" => $this -> username,
                ":plan" => $this -> plan,
                ":name" => $this -> exerciseData['name'],
                ":sets" => $this -> exerciseData['sets'],
                ":reps" => $this -> exerciseData['reps'],
                ":weight" => $this -> exerciseData['weight'],
                ":volume" => $this -> exerciseData['volume'],
                ":progress" => $this -> exerciseData['progress'],
            ))
        ) {
            return true;
        } else return false;   
    }

    public function getExercises() {
        $connect = new Connect();
        $connect -> start();
        $sendQuery =  $connect -> connection -> prepare(
            "SELECT * FROM exercises WHERE username=:user AND plan=:plan"
        );

        $sendQuery -> bindValue(":user", $this -> username);
        $sendQuery -> bindValue(":plan", $this -> plan);

        if($sendQuery -> execute()) {
            if($sendQuery -> rowCount() <= 0) return array();
            return $sendQuery -> fetchAll();
        } else return false;
    }

    public function setUsername(string $name):void {
        $this -> username = $name;
    } 

    public function setPlan(string $plan):void {
        $this -> plan = $plan;
    }

    public function setExerciseData(array $data): void {
        $this -> exerciseData = $data;
    }
}
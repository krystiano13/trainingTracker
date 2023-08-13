<?php

declare(strict_types=1);
namespace App;

require_once '../vendor/autoload.php';
use App\Connect;

final class Exercise {
    private string $username;
    private string $plan;
    private int $id;

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

    public function updateExercise() {
        $connect = new Connect();
        $connect -> start();
        
        $getQuery = $connect -> connection -> prepare(
            "SELECT * FROM exercises WHERE username=:user AND id=:id"
        );

        if($getQuery -> execute(array(
            ':user' => $this -> username,
            ':id' => $this -> id
        ))) {
            if($getQuery -> rowCount() <= 0) return false;
            $data = $getQuery -> fetchAll();

            $sendQuery = $connect -> connection -> prepare(
                <<<QUERY
                UPDATE exercises set
                plan=:plan,
                name=:name,
                sets=:sets,
                repetitions=:reps,
                weight=:weight,
                volume=:volume,
                progress=:progress
                WHERE id=:id
                QUERY
            );
            
            $volume = $data['volume'];
            $newVolume = $this -> exerciseData['sets'] * $this -> exerciseData['reps'] * $this -> exerciseData['weight'];
            $progress = $newVolume / $volume * 100;
            $progressFormated = (float)number_format((float)$progress,2,'.','');

            if(  
                $sendQuery -> execute(
                    array(
                    ":id" => $data['id'],
                    ":plan" => $this -> plan,
                    ":name" => $this -> exerciseData['name'],
                    ":sets" => $this -> exerciseData['sets'],
                    ":reps" => $this -> exerciseData['reps'],
                    ":weight" => $this -> exerciseData['weight'],
                    ":volume" => $this -> $newVolume,
                    ":progress" => $this -> $progressFormated,
                ))
            ) {
                return true;
            } else return false;

        }
        else {
            return false;
        }
    }

    public function setId(int $id) {
        $this -> id = $id;
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
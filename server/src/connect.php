<?php

declare(strict_types=1);
namespace App;
require_once realpath("vendor/autoload.php");

use App\Config;

final class Connect {
    private $connection;
    private $config;

    private function __construct()
    {
        $this -> config = new Config();
    }

    public function start() {
        $this -> connection = new \PDO(
            <<<CONFIG
            mysqlhost={$this->config::$host};
            dbname={$this->config::$dbName};
            CONFIG,
            $this->config::$user,
            $this->config::$password,
            [
                \PDO::ATTR_EMULATE_PREPARES => false,
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
            ]
        );
    }

    public function getConnection() {
        return $this -> connection;
    }
}

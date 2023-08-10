<?php

declare(strict_types=1);
namespace App;
require_once '../vendor/autoload.php';

use App\Config;

final class Connect {
    public $connection;
    private $config;

    public function __construct()
    {
        $this -> config = new Config();
    }

    public function start() {
        $this -> connection = new \PDO(
            <<<CONFIG
            mysql:host={$this->config::$host};
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

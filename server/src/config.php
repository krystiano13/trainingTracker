<?php

declare(strict_types=1);

namespace App;

require_once realpath('vendor/autoload.php');

final class Config {
    static string $host = "localhost";
    static string $user = "root";
    static string $password = "";
    static string $dbName = "ttracker";
}
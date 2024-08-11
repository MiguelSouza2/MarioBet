<?php

$server = "localhost";
$user = "root";
$password = "";
$dbname = "demo";

$link = new mysqli($server, $user, $password, $dbname);

if ($link->connect_error) {
    die("Connection failed: " . $link->connect_error);
} 
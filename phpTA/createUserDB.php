<?php
require_once("./DBAccessClass.php");

//Instantiate object that manages data base access
$traveldata = new TravelDataAccess();

$traveldata->setupDBVars();
$traveldata->createDB();

// sql to create User table
$sql = "CREATE TABLE Users (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
userName VARCHAR(30) NOT NULL,
email VARCHAR(50),
password VARCHAR(50),
ProfileImage VARCHAR(50),
reg_date TIMESTAMP
)";
$traveldata->createTable($sql);

// Insert sample users
$traveldata->insertNewUserData('Test User', 'User@example.com', 'password');

?>

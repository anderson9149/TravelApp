<?php
$servername = "localhost";
$username = "travelApp";
$password = "BGsyo310hL1KLwGK";
$dbname = "travelAppDB";

// Create connection to MySQL
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . "<br>");
}

// Create database
$sql = "CREATE DATABASE $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully" . "<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

// Create connection to travelAppDB
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . "<br>");
}

// sql to create table
$sql = "CREATE TABLE MyUsers (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Username VARCHAR(30) NOT NULL,
email VARCHAR(50),
password VARCHAR(50),
reg_date TIMESTAMP
)";

// Create the table
if ($conn->query($sql) === TRUE) {
    echo "Table MyUsers created successfully" . "<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

$sql = "INSERT INTO MyUsers (Username, email, password)
VALUES ('John Doe', 'john@example.com', 'password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

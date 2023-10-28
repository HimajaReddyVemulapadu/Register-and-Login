<?php
// Check if the form was submitted
if (isset($_POST['register'])) {
    // Database connection details
    $host = "localhost";
    $username = "root";
    $password = '';
    $database = "sr edu data";

    // Create a database connection
    $conn = new mysqli($host, $username, $password, $database);

    // Check the database connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve data from the form
    $name = $_POST['username'];
    $age = $_POST['age'];
    $email = $_POST['emailaddress'];
    $contactno = $_POST['contactno'];
    $password = $_POST['password'];
    $dateofbirth = $_POST['dob'];

    // Prepare and execute the SQL query
    $sql = "INSERT INTO register (username, age, email, contactno, passwords, Dob) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sisiss", $name, $age, $email, $contactno, $password, $dateofbirth);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
// Close the database connection
$stmt->close();
$conn->close();

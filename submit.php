<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli(
    "sql101.infinityfree.com",
    "if0_40728915",
    "Aliyah43ver",
    "if0_40728915_appointments"
);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare(
    "INSERT INTO appointments (fname, lname, email, time, subjects, comments)
     VALUES (?, ?, ?, ?, ?, ?)"
);

$stmt->bind_param(
    "ssssss",
    $_POST['fname'],
    $_POST['lname'],
    $_POST['email'],
    $_POST['time'],
    $_POST['subjects'],
    $_POST['comments']
);

if ($stmt->execute()) {
    echo "✅ Appointment saved!";
} else {
    echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

<?php

$name = test_input($_POST['name']);
$email = $_POST['email'];
$topic = $_POST['topic'];
$message = $_POST['message'];

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}



header('Location: ../pages/contact.html');

?>
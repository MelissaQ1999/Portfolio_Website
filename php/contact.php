<?php

$name = $emailuser = $topic = $message = "";

$name = test_input($_POST['name']);
$emailuser = $_POST['email'];
$topic = $_POST['topic'];
$message = $_POST['message'];

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


// sendgrid
require '../sendgrid/vendor/autoload.php';

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("info@melissavandijk.nl", "Melissa van Dijk");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo("melissaqvandijk1999@gmail.com", "Melissa van Dijk");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}


// header('Location: ../pages/contact.html');

?>
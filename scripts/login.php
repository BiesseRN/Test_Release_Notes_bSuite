<?php
// Connessione al database
$servername = 'https://db4free.net';
$username = 'biessern';
$password = 'BiesseReleaseNotes';
$dbname = 'biessern';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Prendi i valori inviati dal form
$username = $_POST['username'];
$password = $_POST['password'];

// Query per verificare le credenziali
$sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

// Verifica se le credenziali sono valide
if ($result->num_rows > 0) {
  $response = array('success' => true, 'message' => 'Login successful, redirecting...');
} else {
  $response = array('success' => false, 'message' => 'Invalid username or password, please try again!');
}

// Restituisci la risposta come JSON
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>

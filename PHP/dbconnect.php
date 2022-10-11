<?php
$conn = mysqli_connect('localhost', 'clubmouse', 'clubmouse');
$database = mysqli_select_db($conn, 'clubmouse');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

?>
<?php
include('dbconnect.php');
$UserName = $decodedData['username'];

$SQL = "SELECT * FROM achievements WHERE username = '$UserName'";
$exeSQL = mysqli_query($conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

$row = mysqli_fetch_array($exeSQL,MYSQLI_BOTH);
$Message = $row['numEntry'];

$response[] = array("Message" => $Message);

echo json_encode($response);

?>
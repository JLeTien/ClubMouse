<?php
include('dbconnect.php');
$UserName = $decodedData['username'];

$SQL = "SELECT * FROM achievements WHERE username = '$UserName'";
$exeSQL = mysqli_query($conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

$row = mysqli_fetch_array($exeSQL,MYSQLI_BOTH);
$Message1 = $row['numEntry'];
$Message2 = $row['numSleepCompleted'];
$response[] = array("Message" => $Message1,"numSleepCompleted" => $Message2);

echo json_encode($response);

?>

<?php
include('dbconnect.php');
$UserName = $decodedData['username'];

$SQL = "SELECT * FROM events WHERE username = '$UserName'";
$execution = mysqli_query($conn, $SQL);

$rows = mysqli_fetch_array($execution, MYSQLI_BOTH);
$date = $rows["date"];
$time = $rows["time"];
$task = $rows["task"];

$response[] = array("Date" => $date, "Time" => $time, => "Task" => $task);
echo json_encode($response);
?>
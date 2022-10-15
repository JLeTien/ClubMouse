<?php
include('dbconnect.php');
$UserName = $decodedData['username'];

$SQL = "SELECT * FROM events WHERE username = '$UserName'";
$execution = mysqli_query($conn, $SQL);
$checkEvent = mysqli_num_rows($execution);
$dates = array();
$times = array();
$tasks = array();

if ($checkEvent == 0) {
	$Message = "Nothing";
} else {
	while($rows = mysqli_fetch_assoc($execution)) {
	$dates[] = $rows["date"];
	$times[] = $rows["time"];
	$tasks[] = $rows["task"];
	}
}
$response[] = array("Date" => $dates, "Time" => $times, "Task"=>$tasks, "Message" => $Message);
echo json_encode($response);
?>

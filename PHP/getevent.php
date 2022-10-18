<?php
include('dbconnect.php');
$UserName = $decodedData['username'];

$SQL = "SELECT * FROM events WHERE username = '$UserName'";
$execution = mysqli_query($conn, $SQL);
$checkEvent = mysqli_num_rows($execution);
$dates = array();
$timestarts = array();
$timeends = array();
$tasks = array();

if ($checkEvent == 0) {
	$Message = "Nothing";
} else {
	$Message = "Success";
	while($rows = mysqli_fetch_assoc($execution)) {

	$dates[] = $rows["date"];
	$timestarts[] = $rows["timestart"];
	$timeends[] = $rows["timeend"];
	$tasks[] = $rows["task"];
	}
}
$response[] = array("Date" => $dates, "TimeEnd"=>$timeends, "TimeStart" => $timestarts, "Task"=>$tasks, "Message" => $Message);
echo json_encode($response);
#echo json_encode($dates);
#echo json_encode($times);
#echo json_encode($tasks);
?>

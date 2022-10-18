<?php
include('dbconnect.php');
$UserName = $decodedData['username'];
$date = $decodedData['date'];
$timeend = $decodedData['timeend'];
$timestart = $decodedData['timestart'];
$task = $decodedData['task'];

if (empty($date) or empty($timestart) or empty($task) or empty($timeend)) {
    $Message = "Please fill in the blank";

} else {

    $SQL = "INSERT INTO events(userName, date, timestart, timeend, task) VALUES('$UserName', '$date', '$timestart','$timeend' ,'$task')";

    $insertSQL = mysqli_query($conn, $SQL);

    if ($insertSQL) {
        $Message = "Success";
    } else {
        $Message = "Error";
    }

}

$response[] = array("Message" => $Message);

echo json_encode($response);

?>

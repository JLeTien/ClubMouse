<?php
include('dbconnect.php');
$UserName = $decodedData['username'];
$date = $decodedData['date']; //password is hashed
$time = $decodedData['time'];
$task = $decodedData['task'];


$checkIfInserted = "SELECT * FROM events WHERE date = '$date' and userName = '$UserName'";
$exeSQL = mysqli_query($conn, $checkIfInserted);
$checkDate =  mysqli_num_rows($exeSQL);

if (empty($date) or empty($time) or empty($task)) {
    $Message = "Please fill in the blank";

} else if ($checkDate != 0) {
    $SQL = "UPDATE events SET time = '$time', task = '$task' WHERE date = '$date' AND userName = '$UserName'";
    $insertSQL = mysqli_query($conn, $SQL);

    if ($insertSQL) {
        $Message = "Update Success";
    } else {
        $Message = "Error";
    }
} else {
    $SQL = "INSERT INTO events(userName, date, time, task) VALUES('$UserName', '$date', '$time', '$task')";

    $insertSQL = mysqli_query($conn, $SQL);

    if ($insertSQL) {
        $Message = "Insert Success";
    } else {
        $Message = "Error";
    }

}

$response[] = array("Message" => $Message);

echo json_encode($response);

?>
<?php
include('dbconnect.php');
$UserName = $decodedData['username'];
$UserPW = md5($decodedData['password']); //password is hashed

$SQL = "SELECT * FROM user WHERE username = '$UserName'";
$exeSQL = mysqli_query($conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

if ($checkName != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO user(username, password) VALUES('$UserName', '$UserPW')";

    $Signup = mysqli_query($conn, $InsertQuerry);

    if ($Signup) {
        $Message = "Complete--!";
    } else {
        $Message = "Error";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);

?>
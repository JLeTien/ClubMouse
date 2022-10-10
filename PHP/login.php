<?php
include('dbconnect.php');
$UserName = $decodedData['username'];
$UserPW = md5($decodedData['password']); //password is hashed

$SQL = "SELECT * FROM user WHERE username = '$UserName' AND password = '$UserPW' ";
$exeSQL = mysqli_query($conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

if ($checkName == 0) {
    $Message = 'Not registered / wrong password';
} else {
        $Message = "valid";
}
$response[] = array("Message" => $Message);

echo json_encode($response);

?>
<?php
include('dbconnect.php');
$UserName = $decodedData['username'];
$UserPWRaw = $decodedData['password']; //password is hasheid
$Email = $decodedData['email'];

$SQL = "SELECT * FROM user WHERE username = '$UserName'";
$exeSQL = mysqli_query($conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

if ($checkName != 0) {
    $Message = "Already registered";
} elseif (empty($UserName) or empty($UserPWRaw)) {
    $Message = "Please fill in the blank";
} else {
    $UserPW = md5($UserPWRaw);
    $InsertQuery = "INSERT INTO user(username, password, email)VALUES('$UserName', '$UserPW','$Email')";
	
    $Signup = mysqli_query($conn, $InsertQuery);


    if ($Signup) {
        $Message= "valid";
    } else {
        $Message = "Please fill in the blank 2";	
    }
}
$responseRaw[] = array("Message" => $Message);
$response = json_encode($responseRaw);

echo $response;
?>

<?php
header('Access-Control-Allow-Origin: http://localhost:4200');

header('Access-Control-Allow-Methods: GET, POST');

header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
// db connection
$conn=mysqli_connect('localhost','root','','speed_pro');
if($conn === false) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();

}
?>
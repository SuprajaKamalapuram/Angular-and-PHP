<?php
include_once('connect.php');
function addSpeed($getSpeed){
global $conn;
$sql="insert into speed_record (speed,date_time) values ('$getSpeed',NOW())";
$query=mysqli_query($conn,$sql);
if($query){
    echo json_encode(array('status' =>1,'data' =>"Successfully inserted $getSpeed "));
}

}

$getspeed=$_POST['speed'];

addSpeed($getspeed);

?>
<?php 
include_once('connect.php');

$sql = "SELECT * from speed_record";
$query=mysqli_query($conn,$sql);
$data=array();

while( $row = mysqli_fetch_assoc($query) ) {
   $data[] = $row;
 }
echo json_encode(array('status' =>1,'data' =>$data));

?>
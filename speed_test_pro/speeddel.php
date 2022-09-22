<?php 
include_once('connect.php');

$id=isset($_GET['id'])?$_GET['id']:"";

$sql = "delete from speed_record where id='$id'";
$query=mysqli_query($conn,$sql);
echo json_encode(array('status' =>1,'data' =>"succesfully Deleted"));

?>
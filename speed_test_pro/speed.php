<?php 
header('Access-Control-Allow-Origin: http://localhost:4200');

header('Access-Control-Allow-Methods: GET, POST');

header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
function getSpeed($kb){
flush();
$time = explode(" ",microtime());
$start = $time[0] + $time[1];
for($x=0;$x<$kb;$x++){
    echo str_pad('', 1024);
    flush();
}
$time = explode(" ",microtime());
$finish = $time[0] + $time[1];
$deltat = $finish - $start;
sleep(1);
return round($kb / $deltat, 3);
  // echo "-> Test finished in $deltat seconds. Your speed is ". round($kb / $deltat, 3)."Kb/s";
}

$netSpeed=getSpeed(1024);
$result=$netSpeed." Kbs";
echo json_encode(array('status' =>1,'data' =>$result));

?>
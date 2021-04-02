<?php 
session_start();
$con = mysqli_connect("34.93.127.54","root","123456","test");
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}

$res=mysqli_query($con,"SELECT * FROM `test`");
while($row=mysqli_fetch_assoc($res)){
    print_r($row);
}

?>
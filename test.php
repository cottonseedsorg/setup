<?php 
session_start();
$con = mysqli_connect("localhost","root","mysql","stm");
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}

$res=mysqli_query($con,"SELECT * FROM `users`");
while($row=mysqli_fetch_assoc($res)){
    print_r($row);
    echo "im in loop";
}
echo "out";

?>

<!-- <?php 
session_start();
$con = mysqli_connect("localhost","root","","test");
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}

$res=mysqli_query($con,"SELECT * FROM `test`");
while($row=mysqli_fetch_assoc($res)){
    print_r($row);
    echo "im in loop";
}
echo "out";

?> -->
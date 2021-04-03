<?php
echo "php start";

$con = mysqli_connect( "34.93.127.54" , "root" , "123456" , "test");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

mysqli_query( $con , "INSERT INTO `test` (`id`, `name`) VALUES (NULL, 'NUUUU');");
$res=mysqli_query( $con , "SELECT * FROM `test`");
while($row=mysqli_fetch_assoc($res)){
echo $row['name'];
}
mysqli_close($con);

echo "php end";
?>


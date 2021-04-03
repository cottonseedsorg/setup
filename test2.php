<?php 
include "DbConnect.php"; 
$db = new DbConnect();
                $conn = $db->connect();
                $sql = "SELECT * FROM test";
                while($row=mysqli_fetch_assoc($sql)){
                    echo $row['name'];
                }
                
echo "out";
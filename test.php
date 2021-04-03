<?php 
include "DbConnect.php"; 
$db = new DbConnect();
                $conn = $db->connect();
                $sql = "INSERT INTO `test` (`id`, `name`) VALUES (NULL, 'NUUUU');";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
echo "out";

?>

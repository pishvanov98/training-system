<?php

$random = $_COOKIE["reandom_tema"];
if ($random == '0'){
    header("Location:tem.php#1");
}else{
    header("Location:tem.php#$random");
}

?>
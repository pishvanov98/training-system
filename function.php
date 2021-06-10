<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "training_system";

function connect(){
    $conn = mysqli_connect("localhost", "root", "root", "training_system");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
  mysqli_set_charset($conn, "utf8");
    return $conn;
}

function init(){
    //вывожу список тем
    $conn = connect();
    $sql = "SELECT id, tema FROM tems";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}



function selectOneTems(){
  $conn = connect();
  $id = $_POST['gid'];
  $sql = "SELECT * FROM tems WHERE id='$id'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
      $row = mysqli_fetch_assoc($result);
      echo json_encode($row);
  } else {
      echo "0";
  }
  mysqli_close($conn);
}
 

function updateTems(){
    $conn = connect();
      $id = $_POST['id'];
      $tema = $_POST['gtema'];
      $img_glav = $_POST['gimg_glav'];
      $klass = $_POST['gklass'];
      $text_top_img = $_POST['gtext_top_img'];
      $img_scientist = $_POST['gimg_scientist'];
      $year = $_POST['gyear'];
      $description = $_POST['gdescription'];
      $description2 = $_POST['gdescription2'];
      $top_text_img = $_POST['gtop_text_img'];
      $img1 = $_POST['gimg1'];
      $img2 = $_POST['gimg2'];
      $description3 = $_POST['gdescription3'];
      $description4 = $_POST['gdescription4'];
      $description5 = $_POST['gdescription5'];
      $hash = $_POST['ghash'];
      $hash2 = $_POST['ghash2'];
      $hash3 = $_POST['ghash3'];
      $condition_test1 = $_POST['gcondition_test1'];
      $correct_answer1 = $_POST['gcorrect_answer1'];
      $not_correct_answer1 = $_POST['gnot_correct_answer1'];
      $not_correct2_answer1 = $_POST['gnot_correct2_answer1'];
      $not_correct3_answer1 = $_POST['gnot_correct3_answer1'];
      $condition_test2 = $_POST['gcondition_test2'];
      $correct_answer2 = $_POST['gcorrect_answer2'];
      $not_correct_answer2 = $_POST['gnot_correct_answer2'];
      $not_correct2_answer2 = $_POST['gnot_correct2_answer2'];
      $not_correct3_answer2 = $_POST['gnot_correct3_answer2'];
      $condition_test3 = $_POST['gcondition_test3'];
      $correct_answer3 = $_POST['gcorrect_answer3'];
      $not_correct_answer3 = $_POST['gnot_correct_answer3'];
      $not_correct2_answer3 = $_POST['gnot_correct2_answer3'];
      $not_correct3_answer3 = $_POST['gnot_correct3_answer3'];
      $condition_test4 = $_POST['gcondition_test4'];
      $correct_answer4 = $_POST['gcorrect_answer4'];
      $not_correct_answer4 = $_POST['gnot_correct_answer4'];
      $not_correct2_answer4 = $_POST['gnot_correct2_answer4'];
      $not_correct3_answer4 = $_POST['gnot_correct3_answer4'];
      $condition_test5 = $_POST['gcondition_test5'];
      $correct_answer5 = $_POST['gcorrect_answer5'];
      $not_correct_answer5 = $_POST['gnot_correct_answer5'];
      $not_correct2_answer5 = $_POST['gnot_correct2_answer5'];
      $not_correct3_answer5 = $_POST['gnot_correct3_answer5'];
      $condition_test6 = $_POST['gcondition_test6'];
      $correct_answer6 = $_POST['gcorrect_answer6'];
      $not_correct_answer6 = $_POST['gnot_correct_answer6'];
      $not_correct2_answer6 = $_POST['gnot_correct2_answer6'];
      $not_correct3_answer6 = $_POST['gnot_correct3_answer6'];
      $condition_test7 = $_POST['gcondition_test7'];
      $correct_answer7 = $_POST['gcorrect_answer7'];
      $not_correct_answer7 = $_POST['gnot_correct_answer7'];
      $not_correct2_answer7 = $_POST['gnot_correct2_answer7'];
      $not_correct3_answer7 = $_POST['gnot_correct3_answer7'];
      $condition_test8 = $_POST['gcondition_test8'];
      $correct_answer8 = $_POST['gcorrect_answer8'];
      $not_correct_answer8 = $_POST['gnot_correct_answer8'];
      $not_correct2_answer8 = $_POST['gnot_correct2_answer8'];
      $not_correct3_answer8 = $_POST['gnot_correct3_answer8'];
      $condition_test9 = $_POST['gcondition_test9'];
      $correct_answer9 = $_POST['gcorrect_answer9'];
      $not_correct_answer9 = $_POST['gnot_correct_answer9'];
      $not_correct2_answer9 = $_POST['gnot_correct2_answer9'];
      $not_correct3_answer9 = $_POST['gnot_correct3_answer9'];
      $condition_test10 = $_POST['gcondition_test10'];
      $correct_answer10 = $_POST['gcorrect_answer10'];
      $not_correct_answer10 = $_POST['gnot_correct_answer10'];
      $not_correct2_answer10 = $_POST['gnot_correct2_answer10'];
      $not_correct3_answer10 = $_POST['gnot_correct3_answer10'];
      $condition_praktika = $_POST['gcondition_praktika'];
      $text_praktika = $_POST['gtext_praktika'];
      $correct_praktika = $_POST['gcorrect_praktika'];

      $sql = "UPDATE tems SET tema = '$tema', img_glav = '$img_glav', klass = '$klass', text_top_img = '$text_top_img', img_scientist = '$img_scientist', year = '$year', description = '$description', description2 = '$description2', top_text_img = '$top_text_img', img1 = '$img1', img2 = '$img2', description3 = '$description3', description4 = '$description4', description5 = '$description5', hash = '$hash', hash2 = '$hash2', hash3 = '$hash3', condition_test1 = '$condition_test1', correct_answer1 = '$correct_answer1', not_correct_answer1 = '$not_correct_answer1', not_correct2_answer1 = '$not_correct2_answer1', not_correct3_answer1 = '$not_correct3_answer1', condition_test2 = '$condition_test2', correct_answer2 = '$correct_answer2', not_correct_answer2 = '$not_correct_answer2', not_correct2_answer2 = '$not_correct2_answer2', not_correct3_answer2 = '$not_correct3_answer2', condition_test3 = '$condition_test3', correct_answer3 = '$correct_answer3', not_correct_answer3 = '$not_correct_answer3', not_correct2_answer3 = '$not_correct2_answer3', not_correct3_answer3 = '$not_correct3_answer3', condition_test4 = '$condition_test4', correct_answer4 = '$correct_answer4', not_correct_answer4 = '$not_correct_answer4', not_correct2_answer4 = '$not_correct2_answer4', not_correct3_answer4 = '$not_correct3_answer4', condition_test5 = '$condition_test5', correct_answer5 = '$correct_answer5', not_correct_answer5 = '$not_correct_answer5', not_correct2_answer5 = '$not_correct2_answer5', not_correct3_answer5 = '$not_correct3_answer5', condition_test6 = '$condition_test6', correct_answer6 = '$correct_answer6', not_correct_answer6 = '$not_correct_answer6', not_correct2_answer6 = '$not_correct2_answer6', not_correct3_answer6 = '$not_correct3_answer6', condition_test7 = '$condition_test7', correct_answer7 = '$correct_answer7', not_correct_answer7 = '$not_correct_answer7', not_correct2_answer7 = '$not_correct2_answer7', not_correct3_answer7 = '$not_correct3_answer7', condition_test8 = '$condition_test8', correct_answer8 = '$correct_answer8', not_correct_answer8 = '$not_correct_answer8', not_correct2_answer8 = '$not_correct2_answer8', not_correct3_answer8 = '$not_correct3_answer8', condition_test9 = '$condition_test9', correct_answer9 = '$correct_answer9', not_correct_answer9 = '$not_correct_answer9', not_correct2_answer9 = '$not_correct2_answer9', not_correct3_answer9 = '$not_correct3_answer9', condition_test10 = '$condition_test10', correct_answer10 = '$correct_answer10', not_correct_answer10 = '$not_correct_answer10', not_correct2_answer10 = '$not_correct2_answer10', not_correct3_answer10 = '$not_correct3_answer10', condition_praktika = '$condition_praktika', text_praktika = '$text_praktika', correct_praktika = '$correct_praktika' WHERE id='$id'";

if (mysqli_query($conn, $sql)) {
    echo "1";
} else {
    echo "Error updating record: " . $conn->error;
}
    mysqli_close($conn);

}



function newTems(){
    $conn = connect();
    $tema = $_POST['gtema'];
    $img_glav = $_POST['gimg_glav'];
    $klass = $_POST['gklass'];
    $text_top_img = $_POST['gtext_top_img'];
    $img_scientist = $_POST['gimg_scientist'];
    $year = $_POST['gyear'];
    $description = $_POST['gdescription'];
    $description2 = $_POST['gdescription2'];
    $top_text_img = $_POST['gtop_text_img'];
    $img1 = $_POST['gimg1'];
    $img2 = $_POST['gimg2'];
    $description3 = $_POST['gdescription3'];
    $description4 = $_POST['gdescription4'];
    $description5 = $_POST['gdescription5'];
    $hash = $_POST['ghash'];
    $hash2 = $_POST['ghash2'];
    $hash3 = $_POST['ghash3'];
    $condition_test1 = $_POST['gcondition_test1'];
    $correct_answer1 = $_POST['gcorrect_answer1'];
    $not_correct_answer1 = $_POST['gnot_correct_answer1'];
    $not_correct2_answer1 = $_POST['gnot_correct2_answer1'];
    $not_correct3_answer1 = $_POST['gnot_correct3_answer1'];
    $condition_test2 = $_POST['gcondition_test2'];
    $correct_answer2 = $_POST['gcorrect_answer2'];
    $not_correct_answer2 = $_POST['gnot_correct_answer2'];
    $not_correct2_answer2 = $_POST['gnot_correct2_answer2'];
    $not_correct3_answer2 = $_POST['gnot_correct3_answer2'];
    $condition_test3 = $_POST['gcondition_test3'];
    $correct_answer3 = $_POST['gcorrect_answer3'];
    $not_correct_answer3 = $_POST['gnot_correct_answer3'];
    $not_correct2_answer3 = $_POST['gnot_correct2_answer3'];
    $not_correct3_answer3 = $_POST['gnot_correct3_answer3'];
    $condition_test4 = $_POST['gcondition_test4'];
    $correct_answer4 = $_POST['gcorrect_answer4'];
    $not_correct_answer4 = $_POST['gnot_correct_answer4'];
    $not_correct2_answer4 = $_POST['gnot_correct2_answer4'];
    $not_correct3_answer4 = $_POST['gnot_correct3_answer4'];
    $condition_test5 = $_POST['gcondition_test5'];
    $correct_answer5 = $_POST['gcorrect_answer5'];
    $not_correct_answer5 = $_POST['gnot_correct_answer5'];
    $not_correct2_answer5 = $_POST['gnot_correct2_answer5'];
    $not_correct3_answer5 = $_POST['gnot_correct3_answer5'];
    $condition_test6 = $_POST['gcondition_test6'];
    $correct_answer6 = $_POST['gcorrect_answer6'];
    $not_correct_answer6 = $_POST['gnot_correct_answer6'];
    $not_correct2_answer6 = $_POST['gnot_correct2_answer6'];
    $not_correct3_answer6 = $_POST['gnot_correct3_answer6'];
    $condition_test7 = $_POST['gcondition_test7'];
    $correct_answer7 = $_POST['gcorrect_answer7'];
    $not_correct_answer7 = $_POST['gnot_correct_answer7'];
    $not_correct2_answer7 = $_POST['gnot_correct2_answer7'];
    $not_correct3_answer7 = $_POST['gnot_correct3_answer7'];
    $condition_test8 = $_POST['gcondition_test8'];
    $correct_answer8 = $_POST['gcorrect_answer8'];
    $not_correct_answer8 = $_POST['gnot_correct_answer8'];
    $not_correct2_answer8 = $_POST['gnot_correct2_answer8'];
    $not_correct3_answer8 = $_POST['gnot_correct3_answer8'];
    $condition_test9 = $_POST['gcondition_test9'];
    $correct_answer9 = $_POST['gcorrect_answer9'];
    $not_correct_answer9 = $_POST['gnot_correct_answer9'];
    $not_correct2_answer9 = $_POST['gnot_correct2_answer9'];
    $not_correct3_answer9 = $_POST['gnot_correct3_answer9'];
    $condition_test10 = $_POST['gcondition_test10'];
    $correct_answer10 = $_POST['gcorrect_answer10'];
    $not_correct_answer10 = $_POST['gnot_correct_answer10'];
    $not_correct2_answer10 = $_POST['gnot_correct2_answer10'];
    $not_correct3_answer10 = $_POST['gnot_correct3_answer10'];
    $condition_praktika = $_POST['gcondition_praktika'];
    $text_praktika = $_POST['gtext_praktika'];
    $correct_praktika = $_POST['gcorrect_praktika'];

      $sql = "INSERT INTO tems(tema, img_glav, klass, text_top_img , img_scientist , year , description , description2 , top_text_img , img1 , img2 , description3 , description4 , description5 , hash , hash2 , hash3 , condition_test1 , correct_answer1 , not_correct_answer1 , not_correct2_answer1 , not_correct3_answer1 , condition_test2 , correct_answer2 , not_correct_answer2 , not_correct2_answer2, not_correct3_answer2 , condition_test3, correct_answer3, not_correct_answer3, not_correct2_answer3,  not_correct3_answer3 , condition_test4 , correct_answer4 , not_correct_answer4 , not_correct2_answer4 , not_correct3_answer4 , condition_test5 , correct_answer5 , not_correct_answer5 , not_correct2_answer5 , not_correct3_answer5 , condition_test6, correct_answer6 , not_correct_answer6 , not_correct2_answer6 , not_correct3_answer6 , condition_test7 , correct_answer7 , not_correct_answer7 , not_correct2_answer7 , not_correct3_answer7 , condition_test8 , correct_answer8 , not_correct_answer8 , not_correct2_answer8 , not_correct3_answer8 , condition_test9 , correct_answer9 , not_correct_answer9 , not_correct2_answer9 , not_correct3_answer9, condition_test10 , correct_answer10 , not_correct_answer10 , not_correct2_answer10 , not_correct3_answer10 , condition_praktika , text_praktika , correct_praktika)
        VALUES ('$tema', '$img_glav', '$klass', '$text_top_img' , '$img_scientist' , '$year' , '$description' , '$description2' , '$top_text_img' , '$img1' , '$img2' , '$description3' , '$description4' , '$description5' , '$hash' , '$hash2' , '$hash3' , '$condition_test1' , '$correct_answer1' , '$not_correct_answer1' , '$not_correct2_answer1' , '$not_correct3_answer1' , '$condition_test2' , '$correct_answer2' , '$not_correct_answer2' , '$not_correct2_answer2', '$not_correct3_answer2' , '$condition_test3', '$correct_answer3', '$not_correct_answer3', '$not_correct2_answer3',  '$not_correct3_answer3' , '$condition_test4' , '$correct_answer4' , '$not_correct_answer4' , '$not_correct2_answer4' , '$not_correct3_answer4' , '$condition_test5' , '$correct_answer5' , '$not_correct_answer5' , '$not_correct2_answer5' , '$not_correct3_answer5' , '$condition_test6', '$correct_answer6' , '$not_correct_answer6' , '$not_correct2_answer6' , '$not_correct3_answer6' , '$condition_test7' , '$correct_answer7' , '$not_correct_answer7' , '$not_correct2_answer7' , '$not_correct3_answer7' , '$condition_test8' , '$correct_answer8' , '$not_correct_answer8' , '$not_correct2_answer8' , '$not_correct3_answer8' , '$condition_test9' , '$correct_answer9' , '$not_correct_answer9' , '$not_correct2_answer9' , '$not_correct3_answer9', '$condition_test10' , '$correct_answer10' , '$not_correct_answer10' , '$not_correct2_answer10' , '$not_correct3_answer10' , '$condition_praktika' , '$text_praktika' , '$correct_praktika')";

  if (mysqli_query($conn, $sql)) {
    echo "1";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
    mysqli_close($conn);
  
}




function loadTem(){

    
    if ($_COOKIE['hashinit'] == "СКРЕЩИВАНИЕ"){
        loadtem_hesh2();
        
    }
    elseif ($_COOKIE['hashinit'] == "ХРОМОСОМЫ"){
        loadtem_hesh3();
        
    }
    elseif ($_COOKIE['hashinit'] == "ГЕНЫ"){
        loadtem_hesh4();

    }
    elseif ($_COOKIE['hashinit'] == "ГЕНОТИП"){
        loadtem_hesh5();

    }
    elseif ($_COOKIE['hashinit'] == "ФЕНОТИП"){
        loadtem_hesh6();

    }
    elseif ($_COOKIE['hashinit'] == "МУТАЦИИ"){
        loadtem_hesh8();

    }
    elseif ($_COOKIE['hashinit'] == "ДНК"){
        loadtem_hesh9();

    }
    elseif ($_COOKIE['hashinit'] == "КЛЕТКИ"){
        loadtem_hesh10();

    }
    elseif ($_COOKIE['hashinit'] == "ЯДРО"){
        loadtem_hesh11();

    }
    elseif ($_COOKIE['hashinit'] == "НАСЛЕДОВАНИЕ"){
        loadtem_hesh12();

    }
    else {

    $conn = connect();
    $sql = "SELECT * FROM tems";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
    
    }
    
}


  function loadtem_hesh2(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='СКРЕЩИВАНИЕ' OR hash2='СКРЕЩИВАНИЕ' OR hash3='СКРЕЩИВАНИЕ'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh3(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='ХРОМОСОМЫ' OR hash2='ХРОМОСОМЫ' OR hash3='ХРОМОСОМЫ'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh4(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='ГЕНЫ' OR hash2='ГЕНЫ' OR hash3='ГЕНЫ'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh5(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='ГЕНОТИП' OR hash2='ГЕНОТИП' OR hash3='ГЕНОТИП'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh6(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='ФЕНОТИП' OR hash2='ФЕНОТИП' OR hash3='ФЕНОТИП'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadtem_hesh8(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='МУТАЦИИ' OR hash2='МУТАЦИИ' OR hash3='МУТАЦИИ'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh9(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='ДНК' OR hash2='ДНК' OR hash3='ДНК'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh10(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='КЛЕТКИ' OR hash2='КЛЕТКИ' OR hash3='КЛЕТКИ'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh11(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='ЯДРО' OR hash2='ЯДРО' OR hash3='ЯДРО'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }
  function loadtem_hesh12(){
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE hash='НАСЛЕДОВАНИЕ' OR hash2='НАСЛЕДОВАНИЕ' OR hash3='НАСЛЕДОВАНИЕ'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function delTems(){
      $conn = connect();
      $id = $_POST['id'];
      $tema = $_POST['gtema'];
      $img_glav = $_POST['gimg_glav'];
      $klass = $_POST['gklass'];
      $text_top_img = $_POST['gtext_top_img'];
      $img_scientist = $_POST['gimg_scientist'];
      $year = $_POST['gyear'];
      $description = $_POST['gdescription'];
      $description2 = $_POST['gdescription2'];
      $top_text_img = $_POST['gtop_text_img'];
      $img1 = $_POST['gimg1'];
      $img2 = $_POST['gimg2'];
      $description3 = $_POST['gdescription3'];
      $description4 = $_POST['gdescription4'];
      $description5 = $_POST['gdescription5'];
      $hash = $_POST['ghash'];
      $hash2 = $_POST['ghash2'];
      $hash3 = $_POST['ghash3'];
      $condition_test1 = $_POST['gcondition_test1'];
      $correct_answer1 = $_POST['gcorrect_answer1'];
      $not_correct_answer1 = $_POST['gnot_correct_answer1'];
      $not_correct2_answer1 = $_POST['gnot_correct2_answer1'];
      $not_correct3_answer1 = $_POST['gnot_correct3_answer1'];
      $condition_test2 = $_POST['gcondition_test2'];
      $correct_answer2 = $_POST['gcorrect_answer2'];
      $not_correct_answer2 = $_POST['gnot_correct_answer2'];
      $not_correct2_answer2 = $_POST['gnot_correct2_answer2'];
      $not_correct3_answer2 = $_POST['gnot_correct3_answer2'];
      $condition_test3 = $_POST['gcondition_test3'];
      $correct_answer3 = $_POST['gcorrect_answer3'];
      $not_correct_answer3 = $_POST['gnot_correct_answer3'];
      $not_correct2_answer3 = $_POST['gnot_correct2_answer3'];
      $not_correct3_answer3 = $_POST['gnot_correct3_answer3'];
      $condition_test4 = $_POST['gcondition_test4'];
      $correct_answer4 = $_POST['gcorrect_answer4'];
      $not_correct_answer4 = $_POST['gnot_correct_answer4'];
      $not_correct2_answer4 = $_POST['gnot_correct2_answer4'];
      $not_correct3_answer4 = $_POST['gnot_correct3_answer4'];
      $condition_test5 = $_POST['gcondition_test5'];
      $correct_answer5 = $_POST['gcorrect_answer5'];
      $not_correct_answer5 = $_POST['gnot_correct_answer5'];
      $not_correct2_answer5 = $_POST['gnot_correct2_answer5'];
      $not_correct3_answer5 = $_POST['gnot_correct3_answer5'];
      $condition_test6 = $_POST['gcondition_test6'];
      $correct_answer6 = $_POST['gcorrect_answer6'];
      $not_correct_answer6 = $_POST['gnot_correct_answer6'];
      $not_correct2_answer6 = $_POST['gnot_correct2_answer6'];
      $not_correct3_answer6 = $_POST['gnot_correct3_answer6'];
      $condition_test7 = $_POST['gcondition_test7'];
      $correct_answer7 = $_POST['gcorrect_answer7'];
      $not_correct_answer7 = $_POST['gnot_correct_answer7'];
      $not_correct2_answer7 = $_POST['gnot_correct2_answer7'];
      $not_correct3_answer7 = $_POST['gnot_correct3_answer7'];
      $condition_test8 = $_POST['gcondition_test8'];
      $correct_answer8 = $_POST['gcorrect_answer8'];
      $not_correct_answer8 = $_POST['gnot_correct_answer8'];
      $not_correct2_answer8 = $_POST['gnot_correct2_answer8'];
      $not_correct3_answer8 = $_POST['gnot_correct3_answer8'];
      $condition_test9 = $_POST['gcondition_test9'];
      $correct_answer9 = $_POST['gcorrect_answer9'];
      $not_correct_answer9 = $_POST['gnot_correct_answer9'];
      $not_correct2_answer9 = $_POST['gnot_correct2_answer9'];
      $not_correct3_answer9 = $_POST['gnot_correct3_answer9'];
      $condition_test10 = $_POST['gcondition_test10'];
      $correct_answer10 = $_POST['gcorrect_answer10'];
      $not_correct_answer10 = $_POST['gnot_correct_answer10'];
      $not_correct2_answer10 = $_POST['gnot_correct2_answer10'];
      $not_correct3_answer10 = $_POST['gnot_correct3_answer10'];
      $condition_praktika = $_POST['gcondition_praktika'];
      $text_praktika = $_POST['gtext_praktika'];
      $correct_praktika = $_POST['gcorrect_praktika'];

        $sql = "DELETE FROM tems WHERE id='$id'";

  if (mysqli_query($conn, $sql)) {
      echo "1";
  } else {
      echo "Error deleting record: " . $conn->error;
  }
      mysqli_close($conn);
  
  }

  function loadSingleTem () {
    $id = $_POST['id'];
    $conn = connect();
    $sql = "SELECT * FROM tems WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo "0";
    }
    mysqli_close($conn);
    }

    

    function newTems_user(){
        $conn = connect();
        $tema = $_POST['tema'];
        $name_tabl= $_COOKIE["login_user"];
       
          $sql = "INSERT INTO `{$name_tabl}`(tema) VALUES ('$tema')";
    
      if (mysqli_query($conn, $sql)) {
        echo "1";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
        mysqli_close($conn);
      
    }

    function updateTems_user(){
        $conn = connect();
        $name_tabl= $_COOKIE["login_user"];
        $tema = $_POST['tema'];
        $name_block = $_POST['name_block'];
    
          $sql = "UPDATE `{$name_tabl}` SET `{$name_block}` = '+' WHERE tema='$tema'";
    
    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }
        mysqli_close($conn);
    
    }

    function updateTems_userminus(){
        $conn = connect();
        $name_tabl= $_COOKIE["login_user"];
        $tema = $_POST['tema'];
        $name_block = $_POST['name_block'];
    
          $sql = "UPDATE `{$name_tabl}` SET `{$name_block}` = '-' WHERE tema='$tema'";
    
    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }
        mysqli_close($conn);
    
    }

    function updatepraktika_user(){
        $conn = connect();
        $name_tabl= $_COOKIE["login_user"];
        $tema = $_POST['tema'];
        $name_block = $_POST['name_block'];
    
          $sql = "UPDATE `{$name_tabl}` SET `{$name_block}` = '1' WHERE tema='$tema'";
    
    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }
        mysqli_close($conn);
    
    }

    function updatepraktika_userminus(){
        $conn = connect();
        $name_tabl= $_COOKIE["login_user"];
        $tema = $_POST['tema'];
        $name_block = $_POST['name_block'];
    
          $sql = "UPDATE `{$name_tabl}` SET `{$name_block}` = '0' WHERE tema='$tema'";
    
    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }
        mysqli_close($conn);
    
    }


    function sum_test(){
        $conn = connect();
        $name_tabl= $_COOKIE["login_user"];
        $tema = $_POST['tema'];
        $sum = $_POST['sum'];
        $name_block = $_POST['name_block'];
    
          $sql = "UPDATE `{$name_tabl}` SET `{$name_block}` = {$sum} WHERE tema='$tema'";
    
    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }
        mysqli_close($conn);
    
    }
    function loadSingleTem_result () {
        $tema = $_POST['tema'];
        $name_tabl= $_COOKIE["login_user"];
        $conn = connect();
        $sql = "SELECT * FROM `{$name_tabl}` WHERE tema='$tema'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row);
        } else {
            echo "0";
        }
        mysqli_close($conn);
        }
        function rendomtem () {
            $conn = connect();
            $sql = "SELECT
            ROUND(RAND() * ( SELECT MAX(id) FROM  tems)) AS id";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                echo json_encode($row);
            } else {
                echo "0";
            }
            mysqli_close($conn);
            }

            function loadcabinet(){
                $user= $_COOKIE["name_user"];
                $conn = connect();
                $sql = "SELECT * FROM users WHERE login= '$user'";
                $result = mysqli_query($conn, $sql);
                if (mysqli_num_rows($result) > 0) {
                    $out = array();
                    while($row = mysqli_fetch_assoc($result)) {
                        $out[$row["id"]] = $row;
                    }
                    echo json_encode($out);
                } else {
                    echo "0";
                }
                mysqli_close($conn);
                
            }

            function result_user(){
                $name_tabl= $_COOKIE["login_user"];
                $conn = connect();
                $sql = "SELECT * FROM `{$name_tabl}`";
                $result = mysqli_query($conn, $sql);
                if (mysqli_num_rows($result) > 0) {
                    $out = array();
                    while($row = mysqli_fetch_assoc($result)) {
                        $out[$row["id"]] = $row;
                    }
                    echo json_encode($out);
                } else {
                    echo "0";
                }
                mysqli_close($conn);
                
            }
            function delete_user_tem(){
                $name_tabl= $_COOKIE["login_user"];
                $conn = connect();
                $sql = "DELETE FROM `{$name_tabl}`";
                $result = mysqli_query($conn, $sql);
                if (mysqli_num_rows($result) > 0) {
                    $out = array();
                    while($row = mysqli_fetch_assoc($result)) {
                        $out[$row["id"]] = $row;
                    }
                    echo json_encode($out);
                } else {
                    echo "0";
                }
                mysqli_close($conn);
                
            }

            function newtable(){
                $conn = connect();
                $name_tabl= $_COOKIE["login_user"];
            
                  $sql = "ALTER TABLE `{$name_tabl}`
                  ADD UNIQUE (tema),
                  ALTER COLUMN sumtem SET DEFAULT 0,
                  ALTER COLUMN correct_praktika SET DEFAULT 0";
            
              if (mysqli_query($conn, $sql)) {
                echo "1";
              } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
              }
                mysqli_close($conn);
              
            }
            function newcreatetable(){
                $conn = connect();
                $name_tabl= $_COOKIE["login_user"];
            
                  $sql = "CREATE TABLE `{$name_tabl}`
                  (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                  tema VARCHAR(100) NULL,
                  condition_test1 VARCHAR(10) NULL,
                  condition_test2 VARCHAR(10) NULL,
                  condition_test3 VARCHAR(10) NULL,
                  condition_test4 VARCHAR(10) NULL,
                  condition_test5 VARCHAR(10) NULL,
                  condition_test6 VARCHAR(10) NULL,
                  condition_test7 VARCHAR(10) NULL,
                  condition_test8 VARCHAR(10) NULL,
                  condition_test9 VARCHAR(10) NULL,
                  condition_test10 VARCHAR(10) NULL,
                  sumtem VARCHAR(10) NULL,
                  correct_praktika VARCHAR(10) NULL)";

                  
            
              if (mysqli_query($conn, $sql)) {
                echo "1";
              } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
              }
                mysqli_close($conn);
              
            }
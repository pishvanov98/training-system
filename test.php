<?php 
if (!$_SESSION ['logged_user'])
{
  header("Location: index.html"); /* Перенаправление броузера */
}
        require 'db.php';
    ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GENETIX</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
</head>
<body>
  <header>
  <a href="main.php"><img src="img/logo.png" alt="Логотип" width="36px" height="105px"></a>
  <div class="progress"><progress max="<?php echo($_COOKIE["sumprogres"]); ?>" value="<?php echo($_COOKIE["progresgoodAnswer"]); ?>"></progress></div>
  <a href="user_cabinet.php" class="name_user"><?php echo $_COOKIE["name_user"];?></a>
  <a href="user_logout.php" class="exit"><span></span></a>

  </header>
  <div class="test-out-g11"></div>
  <div class="wrapper">
    <div class="slider single-item">
    <div class="out_wraper"><p class="num_1">?</p><div class="test-out-g"></div><div id="correct_answer_1"></div><div id="not_correct_answer_1"></div><div id="not_correct_answer_1_1"></div><div id="not_correct_answer_2_1"></div></div>
    <div class="out_wraper"><p class="num_2_2">?</p><div class="test-out-g2"></div><div id="correct_answer_2"></div><div id="not_correct_answer_2"></div><div id="not_correct_answer_1_2"></div><div id="not_correct_answer_2_2"></div></div>
    <div class="out_wraper"><p class="num_3_3">?</p><div class="test-out-g3"></div><div id="correct_answer_3"></div><div id="not_correct_answer_3"></div><div id="not_correct_answer_1_3"></div><div id="not_correct_answer_2_3"></div></div>
    <div class="out_wraper"><p class="num_4_4">?</p><div class="test-out-g4"></div><div id="correct_answer_4"></div><div id="not_correct_answer_4"></div><div id="not_correct_answer_1_4"></div><div id="not_correct_answer_2_4"></div></div>
    <div class="out_wraper"><p class="num_5_5">?</p><div class="test-out-g5"></div><div id="correct_answer_5"></div><div id="not_correct_answer_5"></div><div id="not_correct_answer_1_5"></div><div id="not_correct_answer_2_5"></div></div>
    <div class="out_wraper"><p class="num_6_6">?</p><div class="test-out-g6"></div><div id="correct_answer_6"></div><div id="not_correct_answer_6"></div><div id="not_correct_answer_1_6"></div><div id="not_correct_answer_2_6"></div></div>
    <div class="out_wraper"><p class="num_7_7">?</p><div class="test-out-g7"></div><div id="correct_answer_7"></div><div id="not_correct_answer_7"></div><div id="not_correct_answer_1_7"></div><div id="not_correct_answer_2_7"></div></div>
    <div class="out_wraper"><p class="num_8_8">?</p><div class="test-out-g8"></div><div id="correct_answer_8"></div><div id="not_correct_answer_8"></div><div id="not_correct_answer_1_8"></div><div id="not_correct_answer_2_8"></div></div>
    <div class="out_wraper"><p class="num_9_9">?</p><div class="test-out-g9"></div><div id="correct_answer_9"></div><div id="not_correct_answer_9"></div><div id="not_correct_answer_1_9"></div><div id="not_correct_answer_2_9"></div></div>
    <div class="out_wraper"><p class="num_10_10">?</p><div class="test-out-g10"></div><div id="correct_answer_10"></div><div id="not_correct_answer_10"></div><div id="not_correct_answer_1_10"></div><div id="not_correct_answer_2_10"></div></div>
    </div>
    <div id="white_wraper"></div>
</div>
<div class="test-out-g12"></div>



  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="slick/slick.min.js"></script>
  <script src="js/test.js"></script>
</body>
</html>
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
</head>
<body>
    <header>
    <a href="main.php"><img src="img/logo.png" alt="Логотип" width="36px" height="105px"></a>
    <div class="progress"><progress max="<?php echo($_COOKIE["sumprogres"]);?>" value="<?php echo($_COOKIE["progresgoodAnswer"]); ?>"></progress></div>
    <a href="user_cabinet.php" class="name_user"><?php echo $_COOKIE["name_user"];?></a>
    <a href="user_logout.php" class="exit"><span></span></a>
    <div class="header_2">
      <p class="name_header">ПОСЛЕДНИЕ ДЕЙСТВИЯ</p>
      <p class="tem_header"><?php 
       $tem =($_COOKIE["tema"]);
       $str = preg_replace('/[^\p{L}0-9 <>]/iu','',$tem);
       echo($str);
      ?></p>
      <a href="test.php" class="href_header">ПРОДОЛЖИТЬ ТЕСТИРОВАНИЕ</a>
    </div>
  </header>


     <div class="head_list">
     <a href="#" id="hesh2">#СКРЕЩИВАНИЕ</a><a href="#" id="hesh3">#ХРОМОСОМЫ</a><a href="#" id="hesh4">#ГЕНЫ</a><a href="#" id="hesh5">#ГЕНОТИП</a><a href="#" id="hesh6">#ФЕНОТИП</a><a href="#" id="hesh8">#МУТАЦИИ</a><a href="#" id="hesh9">#ДНК</a>
        
        <p id="first6" onclick="first6()"> <span class="Rectang">ЕЩЕ</span></p>
                        <p id="first_info6"; style="display:none" onclick="first_info6()"> <span class="Rectang">ЕЩЕ</span></p>
                        <div id="second_hide6" style="display:none">
                       <a href="#" id="hesh10">#КЛЕТКИ</a><a href="#" id="hesh11">#ЯДРО</a><a href="#" id="hesh12">#НАСЛЕДОВАНИЕ</a>
                        </div>       
    </div>
<div class="clear"><br></div>
  <div class="tem-out"></div>


  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/main.js"></script>
  <script defer src="js/list.js"></script>
  
</body>
</html>
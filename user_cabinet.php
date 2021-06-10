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
   <div class="progress"><progress max="<?php echo($_COOKIE["sumprogres"]); ?>" value="<?php echo($_COOKIE["progresgoodAnswer"]); ?>"></progress></div>
  <a href="user_cabinet.php" class="name_user"><?php echo $_COOKIE["name_user"];?></a>
  <a href="user_logout.php" class="exit"><span></span></a>

  </header>

     

  <div class="user-out"></div>
  <div class="right">
    <p class="progres_cabinet_user">ПРОГРЕСС</p>
    <div class="progress_kabinet"><progress max="<?php echo($_COOKIE["sumprogres"]); ?>" value="<?php echo($_COOKIE["progresgoodAnswer"]); ?>"></progress></div>
    <p class="left_tem">ТЕМА</p>
    <p class="cabinet_tema">ТЕСТЫ</p>
    <p class="cabinet_tema">ПРАКТИКА</p>
    <div class="user-out2"></div>
  </div>
  <div class="button_cabinet">
  <a href="main.php">ВЫЙТИ</a><button id="delit" class="del-to-progres" style="cursor:pointer">СБРОСИТЬ ПРОГРЕСС</button>

  </div>

  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/user_cabinet.js"></script>

</body>
</html>
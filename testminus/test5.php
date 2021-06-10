<?php
if (!$_SESSION ['resultat'])
{
  header("Location: ../index.html"); /* Перенаправление броузера */
}

?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GENETIX</title>
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
  <header>
  <a href="../main.php"><img src="../img/logo.png" alt="Логотип" width="36px" height="105px"></a>
  <div class="progress"><progress max="<?php echo($_COOKIE["sumprogres"]); ?>" value="<?php echo($_COOKIE["progresgoodAnswer"]); ?>"></progress></div>
  <a href="#" class="name_user"><?php echo $_COOKIE["name_user"];?></a>
  <a href="user_logout.php" class="exit"><span></span></a>

  </header>

<div class="test-out-g"></div>



  <script src="../js/jquery-3.2.1.min.js"></script>

  <script src="testminus5.js"></script>
</body>
</html>
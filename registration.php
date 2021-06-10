<?php 
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
  <div id="wrapper">
    <?php 

        
        $data = $_POST;

        //если кликнули на button
        if ( isset($data['do_signup']) )
          {
            // проверка формы на пустоту полей
            $login = array();
            if ( trim($data['login']) == '' )
            {
              $login[] = '*ВВЕДИТЕ ИМЯ И ФАМИЛИЮ';
            }
            $city = array();
            if ( trim($data['city']) == '' )
            {
              $city[] = '*ВВЕДИТЕ СТРАНУ И ГОРОД';
            }
            $email = array();
            if ( trim($data['email']) == '' )
            {
              $email[] = '*ВВЕДИТЕ ПОЧТУ';
            }
            $password = array();
            if ( $data['password'] == '' )
            {
              $password[] = '*ВВЕДИТЕ ПАРОЛЬ';
            }
            if(strlen($_POST["password"]) < 8){
              $password[] = '*ВВЕДИТЕ 8 СИМВОЛОВ';
          }
        
          //проверка на существование одинаковой почты
          if ( R::count('users', "email = ?", array($data['email'])) > 0)
          {
            $email[] = '*ПОЧТА УЖЕ ИСПОЛЬЗУЕТСЯ';
          }
          if ( empty($login) )
          {
            if ( empty($city) )
            {
              if ( empty($email) )
              {
                if ( empty($password) )
                {
                    //ошибок нет, теперь регистрируем
                    $user = R::dispense('users');
                    $user->login = $data['login'];
                    $user->city = $data['city'];
                    $user->email = $data['email'];
                    $user->password = password_hash($data['password'], PASSWORD_DEFAULT); //пароль нельзя хранить в открытом виде, мы его шифруем при помощи функции password_hash для php > 5.6
                    R::store($user);
                    $log = $_POST['email'];
                    $transnameb=strstr($log,'@',tru);
                     setcookie("login_user", $transnameb);
                     $_SESSION['logged_user'] = $user; 
                  $name_user = $_SESSION['logged_user']->login;//куки имени и фамилии при авторизации
                  setcookie("name_user", $name_user);
                    ?>
                    <script src="js/jquery-3.2.1.min.js"></script>
                 <script>
                 function init() {
                  $.post(
                      "core.php",
                      {
                          "action" : "newcreatetable"

                      },
                  );
                 
                }
                function init2() {
                  $.post(
                      "core.php",
                      {
                          "action" : "newtable"

                      },
                  );
                
                }
                function init3(){
                  setTimeout(function(){
                   window.location.href = 'main.php';
                 }, 500);
                }


                  $(document).ready(function () {
                  init();
                  init2();
                  init3();
                    });
                 </script>
                 <?php

                 
                    
                 }
              }
           }
         }
         
        }
        if ( isset($data['do_back']) )
        {
          header('Location: index.html');
        }

    ?>
		<div class="authentication">
    <div class="block_reg">
               <h4> РЕГИСТРАЦИЯ </h4>
     </div>
			<form action="registration.php" method="POST">
				<input type="text" name="login" placeholder="ФАМИЛИЯ И ИМЯ" autocomplete="off" class="passlog up_case" value="<?php echo @$data['login']; ?>"> <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 33px;padding:19px 0 0 50px;">' .array_shift($login). '</div><br/>'; ?>
        <input type="text" name="city" placeholder="СТРАНА И ГОРОД" autocomplete="off" class="passlog up_case" value="<?php echo @$data['city']; ?>">  <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 33px;padding:19px 0 0 50px;">' .array_shift($city). '</div><br/>'; ?>
				<input type="text" name="email" placeholder="ПОЧТА" autocomplete="off" class="passlog up_case" value="<?php echo @$data['email']; ?>">  <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 33px;padding:19px 0 0 50px;">' .array_shift($email). '</div><br/>'; ?>
				<input type="password" name="password" placeholder="ПАРОЛЬ" autocomplete="off" class="passlog" value="<?php echo @$data['password']; ?>"> <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 33px;padding:19px 0 0 50px;">' .array_shift($password). '</div><br/>'; ?>
        <button type="submit" class="form-button_register" name="do_back" style="cursor:pointer">НАЗАД</button>
				<button type="submit" class="form-button_register" name="do_signup" style="cursor:pointer">РЕГИСТРАЦИЯ</button>
			</form>
		</div>


    
  </div>  
</body>
<script src="js/jquery-3.2.1.min.js"></script>
</html>
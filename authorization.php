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
			if ( isset($data['do_email']) )
			{
                if ( trim($data['email']) == '' )
                {
                  $email[] = '*ВВЕДИТЕ ПОЧТУ';
                }
        
                if ( $data['password'] == '' )
                {
                  $errors[] = '*ВВЕДИТЕ ПАРОЛЬ';
                }

				$user = R::findOne('users', 'email = ?', array($data['email']));
				if ( $user )
				{
					//почта существует
					if ( password_verify($data['password'], $user->password) )
					{
						//если пароль совпадает, то нужно авторизовать пользователя
						$_SESSION['logged_user'] = $user; 
            $name_user = $_SESSION['logged_user']->login;//куки имени и фамилии при авторизации
            setcookie("name_user", $name_user);
            header('Location: main.php');
          }
            else{
						$errors[] = '*НЕВЕРНО ВВЕДЕН ПАРОЛЬ';
				      	}

				}
          else{
              $email[] = '*ПОЛЬЗОВАТЕЛЬ С ТАКОЙ ПОЧТОЙ НЕ НАЙДЕН';
              }
              $log = $_POST['email'];
              $transnameb=strstr($log,'@',tru);
              setcookie("login_user", $transnameb);
			}
    
        
    

		?>
		<div class="authentication_2">
        <div class="block_reg">
               <h4> АВТОРИЗАЦИЯ </h4>
        </div>
			<form action="authorization.php" method="POST">
				<input type="text" name="email" placeholder="ПОЧТА" autocomplete="off" class="passlog up_case" value="<?php echo @$data['email']; ?>"> <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 33px;padding:19px 0 0 50px;">' .array_shift($email). '</div><br/>'; ?>
				<input type="password" name="password" placeholder="ПАРОЛЬ" autocomplete="off" class="passlog" value="<?php echo @$data['password']; ?>"> <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 33px;padding:19px 0 0 50px;">' .array_shift($errors). '</div><br/>'; ?>
				<button type="submit" class="form-button" name="do_email" style="cursor:pointer">ВОЙТИ</button>
			</form>
		</div>
	</div>

    
  </div>  
  <script src="js/jquery-3.2.1.min.js"></script>
</body>
</html>
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
                

				$authu = R::findOne('authu', 'log = ?', array($data['log']));
				if ( $authu )
				{
					//логин существует
					if ( password_verify($data['passw'], $authu->passw) )
					{
						//если пароль совпадает, то нужно авторизовать пользователя
						$_SESSION['authu'] = $authu; 
            $name_authu = $_SESSION['authu']->log;//куки имени и фамилии при авторизации
						setcookie("name_authu", $name_authu);  
            header('Location: administrator.php');
          }
            else{
						$errors[] = '*НЕВЕРНО ВВЕДЕН ПАРОЛЬ';
				      	}

				}
				
			}
        
    

		?>
		<div class="authentication_2">
        <div class="block_reg">
               <h4> АВТОРИЗАЦИЯ </h4>
        </div>
			<form action="admin.php" method="POST">
				<input type="text" name="log" placeholder="ЛОГИН" autocomplete="off" class="passlog up_case" value="<?php echo @$data['log']; ?>"> <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 26px;padding:19px 0 0 10px;">' .array_shift($log). '</div><br/>'; ?>
				<input type="password" name="passw" placeholder="ПАРОЛЬ" autocomplete="off" class="passlog" value="<?php echo @$data['passw']; ?>"> <?php echo '<div class="sig" style="color:#ffffff;display:inline;position:absolute;font-size: 26px;padding:19px 0 0 10px;">' .array_shift($errors). '</div><br/>'; ?>
				<button type="submit" class="form-button" name="do_email" style="cursor:pointer">ВОЙТИ</button>
			</form>
		</div>
	</div>

    
  </div>
  <script src="js/jquery-3.2.1.min.js"></script>  
</body>
</html>
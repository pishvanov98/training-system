<?php 
require 'libs/rb.php';
R::setup( 'mysql:host=127.0.0.1;dbname=training_system','root', 'root' ); 
if ( !R::testconnection() )
{
		exit ('Нет соединения с базой данных');
}

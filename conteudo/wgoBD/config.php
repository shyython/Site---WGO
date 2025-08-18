<?php 
define('HOSt', 'localhost');
define('USER ', 'root'); 
define('PASS', '');
define('BASE', 'wgo');

$conexao = new msqli (HOST, USER, PASS, BASE);
$conexao->set_charset('utf8mb4');
?>
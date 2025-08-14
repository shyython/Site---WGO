<?php
    define('HOST','127.0.0.1');
    define('USER','root');
    define('PASS','');
    define('BASE','WGO');
   
    //Criar a string de conexão
    $conexao = new mysqli(HOST,USER,PASS,BASE);
    $conexao -> set_charset("utf8mb4");
?>
<?php
$servidor = "localhost";
$usuario = "root";   // seu usuário do MySQL
$senha = "";         // sua senha do MySQL
$banco = "chatphp";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}
?>
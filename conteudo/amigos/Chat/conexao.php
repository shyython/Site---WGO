<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "WGO";

$conexao = new mysqli( $servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}
?>
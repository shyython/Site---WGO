<?php 
session_start();
require ("config.php");

$usuarioAutenticado = false;

$emailUsuario = $_get['email'];
$senhaUsuario = $_get['senha'];

$sql ="SELECT * FROM usuarios WHERE email = '{$emailUsuario}'";
$res = $conexao->query($sql);
$row = $res->fetch_object();

if ($emailUsuario == $row->email && $senhaUsuario == $row->senha) {
    $usuarioAutenticado = true; 

    $_SESSION['id'] = $row->id;
    $_SESSION['nome'] = $row->nome;
} 
else {
    $usuarioAutenticado = false;
}

if ($usuarioAutenticado) {
    $_SESSION['autenticado'] = 'sim';
    header('location: ../inicio/home.php');
}
else {
    $_SESSION['autenticado'] = 'nao';
    header('location: ../inicio/index.php?login=erro');
}
?>
<?php
session_start();
require 'config.php';

$usuarioAutenticado = false;

//RECEBENDO OS DADOS VIA MÉTODO GET
$emailUsuario = $_POST['emailUsuario'];
$senhaUsuario = md5($_POST['senhaUsuario']);

//BUSCANDO NO BANCO AS INFORMAÇÕES
$sql = "SELECT * FROM dados_usuarios WHERE emailUsuario='{$emailUsuario}'";
$res = $conexao->query($sql);
$row = $res->fetch_object();

// AUTENTICANDO O USUÁRIO
if ($emailUsuario == $row->emailUsuario && $senhaUsuario == $row->senhaUsuario) {
    $usuarioAutenticado = true;
    $_SESSION['id_usuario'] = $row->id_usuario;
    $_SESSION['nomeUsuario'] = $row->nomeUsuario;
} else {
    $usuarioAutenticado = false;
}

if ($usuarioAutenticado) {
    // VALIDANDO A SESSÃO
    $_SESSION['autenticado'] = 'sim';
    header('location: ../home/home.php');
    exit;
} else {
    // VALIDANDO A SESSÃO
    $_SESSION['autenticado'] = 'nao';
    header('location: login.php?login=erro');
    exit;
}


<?php
session_start();

// Verifica se o usuário está autenticado
if (!isset($_SESSION['autenticado']) || $_SESSION['autenticado'] != 'sim') {
    header('location: login.php?login=erro2');
    exit;
}

// Verifica se o e-mail da sessão está presente e é válido
if (!isset($_SESSION['email']) || !filter_var($_SESSION['email'], FILTER_VALIDATE_EMAIL)) {
    header('location: home.php?permissao=nao');
    exit;
}

// Redireciona para home.php se tudo estiver ok
header('location: ../home/home.php');
exit;
?>
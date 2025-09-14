<?php
session_start();

if (!isset($_SESSION['autenticado']) || $_SESSION['autenticado'] !== 'sim') {
    header('Location: login.php?login=erro2');
    exit;
}

// Verifica se o CNPJ está na sessão (14 dígitos)
if (!isset($_SESSION['cnpjEmpresa']) || !preg_match('/^\d{14}$/', $_SESSION['cnpjEmpresa'])) {
    header('Location: home.php?permissao=nao');
    exit;
}

// usuário autenticado — segue a página normalmente
?>

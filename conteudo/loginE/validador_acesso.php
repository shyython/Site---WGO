<?php
session_start();

// Verifica se o usuário está autenticado
if (!isset($_SESSION['autenticado']) || $_SESSION['autenticado'] !== 'sim') {
    header('Location: ../loginE/login.php?login=erro2');
    exit;
}

?>

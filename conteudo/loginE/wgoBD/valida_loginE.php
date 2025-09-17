<?php
session_start();
require 'config.php';

$empresaAutentificada = false;

// RECEBENDO OS DADOS VIA POST
$cnpjEmpresa  = isset($_POST['cnpjEmpresa']) ? preg_replace('/[^0-9]/', '', $_POST['cnpjEmpresa']) : '';
$senhaEmpresa = isset($_POST['senhaEmpresa']) ? md5($_POST['senhaEmpresa']) : '';

// BUSCANDO NO BANCO AS INFORMAÇÕES
$sql = "SELECT * FROM Dados_Empresa WHERE cnpjEmpresa='{$cnpjEmpresa}' LIMIT 1";
$res = $conexao->query($sql);

if ($res && $res->num_rows > 0) {
    $row = $res->fetch_object();

    // AUTENTICANDO O USUÁRIO
    if ($cnpjEmpresa == $row->cnpjEmpresa && $senhaEmpresa == $row->senhaEmpresa) {
        $empresaAutentificada = true;
        $_SESSION['id_empresa']   = $row->id_empresa;
        $_SESSION['nomeEmpresa']  = $row->nomeEmpresa;
    }
}

if ($empresaAutentificada) {
    $_SESSION['autenticado'] = 'sim';
    header('location: ../home/home.php');
    exit;
} else {
    $_SESSION['autenticado'] = 'não';
    header('location: login.php?login=erro');
    exit;
}
?>

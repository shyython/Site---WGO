<?php
include('../login/config.php');

// VERIFICA SE O E-MAIL JÁ ESTÁ CADASTRADO
$emailUsuario = $_POST['emailUsuario'];

// PEGA OS DADOS DO FORMULÁRIO
$tipoUsuario = "usuario";
$nome = $_POST['nomeCompleto'];
$username = $_POST['username'];
$data_nasc = $_POST['dataNascimento'];

// 🔑 Gera hash MD5 da senha
$senhaUsuario = md5($_POST['senhaUsuario']);

$imgPerfil = !empty($_POST['imgPerfil']) ? $_POST['imgPerfil'] : null;
$telefone = $_POST['telefone'];
$descricao = $_POST['descricao'];

// Verifica se o e-mail já existe
$sql = "SELECT * FROM dados_usuarios WHERE emailUsuario = ?";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("s", $emailUsuario);
$stmt->execute();
$res = $stmt->get_result();

if ($res->num_rows > 0) {
    header('Location: cadastro.php?email=erro');
    exit();
}

// INSERÇÃO DOS DADOS NO BANCO
$sql = "INSERT INTO dados_usuarios 
(tipoUsuario, nome, username, emailUsuario, senhaUsuario, data_nasc, foto, telefone, descricao) 
VALUES (?,?,?,?,?,?,?,?,?)";

$stmt = $conexao->prepare($sql);
$stmt->bind_param(
    "sssssssss",
    $tipoUsuario,
    $nome,
    $username,
    $emailUsuario,
    $senhaUsuario,
    $data_nasc,
    $imgPerfil,
    $telefone,
    $descricao
);

$res = $stmt->execute();

// REDIRECIONA COM BASE NO RESULTADO
if ($res) {
    header('Location: ../login/login.php?usuario=sucesso');
} else {
    header('Location: ../cadastrar/cadastro.php?usuario=falha');
}
?>

<?php
session_start();
include('../../login/config.php');

// Verifica se o usuário está autenticado
if (!isset($_SESSION['id_empresa'])) {
    die("Usuário não autenticado!");
}
$id_Empresa = $_SESSION['id_empresa'];

// Recebe dados do formulário
$nome = trim($_POST['nome']);
$categoria = trim($_POST['categoria']);
$endereco = trim($_POST['endereco']);
$tipo = trim($_POST['tipo']);
$horario = trim($_POST['horario']);
$descricao = trim($_POST['descricao']);

// URLs das imagens (opcionais)
$img1 = !empty($_POST['img1']) ? $_POST['img1'] : null;
$img2 = !empty($_POST['img2']) ? $_POST['img2'] : null;
$img3 = !empty($_POST['img3']) ? $_POST['img3'] : null;
$img4 = !empty($_POST['img4']) ? $_POST['img4'] : null;

// Query para inserir o evento
$sql = "INSERT INTO Eventos 
(Nome_Evento, Categoria, Endereco, Tipo, horario, descricao, Img1, Img2, Img3, Img4, id_empresa)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexao->prepare($sql);
$stmt->bind_param(
    "ssssssssssi",
    $nome,
    $categoria,
    $endereco,
    $tipo,
    $horario,
    $descricao,
    $img1,
    $img2,
    $img3,
    $img4,
    $id_Empresa
);

// Executa e redireciona
if ($stmt->execute()) {
    header("Location: ver.php");
    exit();
} else {
    // Se quiser redirecionar com erro, pode passar ?erro=1 na URL
    header("Location: ver.php?erro=1");
    exit();
}

$stmt->close();
$conexao->close();
?>

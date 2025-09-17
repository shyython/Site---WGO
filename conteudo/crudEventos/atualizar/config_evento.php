<?php
require_once "validador_acesso.php";
require_once "config.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = intval($_POST['Id_Evento']);
    $nome = $_POST['Nome_Evento'];
    $categoria = $_POST['Categoria'];
    $endereco = $_POST['Endereco'];
    $tipo = $_POST['Tipo'];
    $horario = $_POST['Horario'];
    $descricao = $_POST['Descricao'];
    $img1 = $_POST['Img1'];
    $img2 = $_POST['Img2'];
    // outros campos conforme necessário

    $sql = "UPDATE eventos SET 
        Nome_Evento = ?, 
        Categoria = ?, 
        Endereco = ?, 
        Tipo = ?, 
        Horario = ?, 
        Descricao = ?, 
        Img1 = ?, 
        Img2 = ? 
        WHERE Id_Evento = ?";

    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ssssssssi", $nome, $categoria, $endereco, $tipo, $horario, $descricao, $img1, $img2, $id);

    if ($stmt->execute()) {
        header("Location: eventos.php?msg=Evento atualizado com sucesso");
    } else {
        echo "Erro ao atualizar evento: " . $conexao->error;
    }
} else {
    echo "Método inválido.";
}

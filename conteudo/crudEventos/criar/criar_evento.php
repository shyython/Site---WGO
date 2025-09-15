<?php
include('../../login/config.php');

// Recebe os dados do formulário
$nome = $_POST['nome'];
$categoria = $_POST['categoria'];
$endereco = $_POST['endereco'];
$tipo = $_POST['tipo'];
$horario = $_POST['horario'];
$descricao = $_POST['descricao'];
// $data_inicio = $_POST['data_inicio'];

// $hora_inicio = $_POST['hora_inicio'];
// $data_fim = $_POST['data_fim'];
// $hora_fim = $_POST['hora_fim'];

// Recebe as URLs das imagens
$img1 = !empty($_POST['img1']) ? $_POST['img1'] : null;
$img2 = !empty($_POST['img2']) ? $_POST['img2'] : null;
$img3 = !empty($_POST['img3']) ? $_POST['img3'] : null;
$img4 = !empty($_POST['img4']) ? $_POST['img4'] : null;
// data_inicio,hora_inicio,data_fim,hora_fim Img1
// $data_inicio,
//     $hora_inicio,
//     $data_fim,
//     $hora_fim,

// Prepara a query com placeholders
$sql = "INSERT INTO Eventos 
(Nome_Evento, Categoria, Endereco, Tipo,horario,descricao, iMG1 ,Img2, Img3, Img4)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexao->prepare($sql);
$stmt->bind_param(
    "ssssssssss",
    $nome,
    $categoria,
    $endereco,
    $tipo,
    $horario,
    $descricao,
    $img1,
    $img2,
    $img3,
    $img4
);


if ($stmt->execute()) {
    echo "✅ Evento criado com sucesso!<br>";

    // Exibe as imagens (se tiverem sido preenchidas)
    foreach ([$img1, $img2, $img3, $img4] as $img) {
        if ($img) {
            echo '<img src="' . htmlspecialchars($img) . '" alt="Evento" width="200" style="margin:10px;">';
        }
    }
} else {
    echo "❌ Erro: " . $stmt->error;
}

$stmt->close();
$conexao->close();
?>

<?php
include('../../login/config.php');

// Recebe os dados do formulário
$nome = $_POST['nome'];
$categoria = $_POST['categoria'];
$endereco = $_POST['endereco'];
$tipo = $_POST['tipo'];
$horario = $_POST['horario'];
$descricao = $_POST['descricao'];

// Pasta pública para salvar as imagens (deve estar acessível via navegador)
$pasta = "../uploads/"; // ajuste conforme a estrutura do seu projeto
$urlPasta = "uploads/"; // caminho usado no HTML para exibir

if (!is_dir($pasta)) {
    mkdir($pasta, 0777, true);
}

$nomesImagens = [];

// Processa o upload das imagens (até 4)
if (!empty($_FILES['imagens']['name'][0])) {
    foreach ($_FILES['imagens']['tmp_name'] as $key => $tmp_name) {
        if ($key < 4 && is_uploaded_file($tmp_name)) {
            $nomeOriginal = basename($_FILES['imagens']['name'][$key]);
            $novoNome = uniqid() . "_" . $nomeOriginal;
            move_uploaded_file($tmp_name, $pasta . $novoNome);
            $nomesImagens[] = $novoNome;
        }
    }
}

// Garantir sempre 4 valores no array
while (count($nomesImagens) < 4) {
    $nomesImagens[] = null;
}

// Prepara a query com placeholders
$sql = "INSERT INTO Eventos 
(Nome_Evento, Categoria, Endereco, Tipo, Horario, Descricao, Img1, Img2, Img3, Img4)
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
    $nomesImagens[0],
    $nomesImagens[1],
    $nomesImagens[2],
    $nomesImagens[3]
);

if ($stmt->execute()) {
    echo "Evento criado com sucesso!<br>";

    // Exibe as imagens no navegador
    foreach ($nomesImagens as $img) {
        if ($img) {
            echo '<img src="' . $urlPasta . $img . '" alt="Evento" width="200" style="margin:10px;">';
        }
    }
} else {
    echo "Erro: " . $stmt->error;
}

$stmt->close();
$conexao->close();
?>

<?php
require_once "../ConfigBd/porta.php";

$sql = "INSERT INTO eventos (Nome_Evento, Categoria, Endereco, Tipo, Horario, Descricao, Img1, Img2, Img3, Img4, Telefone)
VALUES ('Teste Evento', 'Descrição do evento de teste', '2024-07-01', 'Local do evento de teste', 'imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg')";
// if ($conexao->query($sql) === TRUE) {
//     echo "Novo evento criado com sucesso";
// } else {
//     echo "Erro: " . $sql . "<br>" . $conexao->error;
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <h1>adicionar evento </h1>

    </main>
</body>
</html>
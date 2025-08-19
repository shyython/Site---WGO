<?php
include 'conexao.php';

if (!empty($_POST['usuario']) && !empty($_POST['texto'])) {
    $usuario = $conexao->real_escape_string($_POST['usuario']);
    $texto = $conexao->real_escape_string($_POST['texto']);

    $sql = "INSERT INTO mensagens (usuario, texto) VALUES ('$usuario', '$texto')";
    $conexao->query($sql);
}
?>

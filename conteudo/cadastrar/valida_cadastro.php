<?php
    include('../login/config.php');

    // VERIFICA SE O E-MAIL JÁ ESTÁ CADASTRADO
    $email = $_POST['emailUsuario'];
    $sql = "SELECT * FROM usuarios WHERE emailUsuario = '$email'";
    $res = $conexao->query($sql);

    if ($res->num_rows > 0) {
        header('Location: cadastro.php?email=erro');
        exit();
    }

    // PEGA OS DADOS DO FORMULÁRIO
    $nome = $_POST['nome'];
    $senha = md5($_POST['senhaUsuario']);

    // INSERÇÃO DOS DADOS NO BANCO
    $sql = "INSERT INTO usuarios (nomeUsuario, emailUsuario, senhaUsuario) VALUES ('$nome', '$email', '$senha')";
    $res = $conexao->query($sql);

    // REDIRECIONA COM BASE NO RESULTADO
    if ($res === true) {
        header('Location: ../login/login.php?usuario=sucesso');
    } else {
        header('Location: ../cadastrar/cadastro.php?usuario=falha');
    }
?>

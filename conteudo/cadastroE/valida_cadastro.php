<?php
    include('../login/config.php');

    // VERIFICA SE O E-MAIL JÁ ESTÁ CADASTRADO
    $emailUsuario = $_POST['emailEmpresa'];
    $sql = "SELECT * FROM usuarios WHERE emailUsuario = '$emailUsuario'";
    $res = $conexao->query($sql);

    if ($res->num_rows > 0) {
        header('Location: cadastro.php?email=erro');
        exit();
    }

    // PEGA OS DADOS DO FORMULÁRIO
    $nome = $_POST['nomeCompleto'];
    $nomeUsuario = $_POST['nomeUsuario'];
    $tipoUsuario = "usuario";
    $senhaUsuario = md5($_POST['senhaUsuario']);

   

    // INSERÇÃO DOS DADOS NO BANCO
    $sql = "INSERT INTO usuarios (nome, nomeUsuario, tipoUsuario, emailUsuario, senhaUsuario) VALUES ('$nome', '$nomeUsuario', '$tipoUsuario', '$emailUsuario', '$senhaUsuario')";
    $res = $conexao->query($sql);

    // REDIRECIONA COM BASE NO RESULTADO
    if ($res === true) {
        header('Location: ../login/login.php?usuario=sucesso');
    } else {
        header('Location: ../cadastrar/cadastro.php?usuario=falha');
    }
?>





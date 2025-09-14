<?php
    include('../login/config.php');

    // VERIFICA SE O E-MAIL JÁ ESTÁ CADASTRADO
    $emailEmpresa = $_POST['emailEmpresa'];
    $sql = "SELECT * FROM Dados_Empresa WHERE emailEmpresa = '$emailEmpresa'";
    $res = $conexao->query($sql);

    if ($res->num_rows > 0) {
        header('Location: cadastro.php?email=erro');
        exit();
    }

    // PEGA OS DADOS DO FORMULÁRIO
    $nomeEmpresa = $_POST['nomeEmpresa'];
    $cnpjEmpresa = $_POST['cnpjEmpresa'];
    $telefoneEmpresa = $_POST['telefoneEmpresa'];
    $enderecoEmpresa = $_POST['enderecoEmpresa'];
    $cepEmpresa = $_POST['cepEmpresa'];
    tipo
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





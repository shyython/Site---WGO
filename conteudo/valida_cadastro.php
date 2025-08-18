<?php
    include ('config.php');
   
    
    $sql = "SELECT * FROM usuarios WHERE email = '{$_POST['email']}'";
    $res = $conexao->query($sql);

    if ($res->num_rows > 0) {
        header('location: cadastro.php?email=erro');
        exit(); 
    }   

    //VALIDA SE FOI SELECIONADO ALGUMA OPÇÃO
    if($_POST['perfil'] === "-- Selecione --")
    {
        header('location: cadastro.php?validaperfil=erro');
    } else {

        $nome = $_POST['nome'];
        $nomeUsuario = $_POST['nomeUsuario'];
        $email = $_POST['email'];
        $senha = md5($_POST['senha']);


        //INSERÇÃO DOS DADOS NO BANCO
        $sql = "INSERT INTO usuarios(nome, email, senha, perfil) VALUES('{$nome}', '{$nomeUsuario}', '{$emailUsuario}', '{$senhaUsuario}')";
        $res = $conexao->query($sql);

        //REDIRECIONA E INFORMA SE FOI CONCLUIDA A INCLUSÃO COM SUCESSO OU NÃO
        if($res==true){
            header('location: index.php?usuario=sucesso');
        } else { header('location: cadastro.php?usuario=falha');}
    }
?>
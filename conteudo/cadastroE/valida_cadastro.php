<?php
include('../loginE/config.php');

// VERIFICA SE O CNPJ JÁ ESTÁ CADASTRADO
$cnpjEmpresa = preg_replace('/[^0-9]/is', '', $_POST['cnpjEmpresa']); // mantém só números
$sql = "SELECT * FROM Dados_Empresa WHERE cnpjEmpresa = '$cnpjEmpresa'";
$res = $conexao->query($sql);

if ($res->num_rows > 0) {
    header('Location: cadastro.php?cnpj=erro');
    exit();
}

// PEGA OS DADOS DO FORMULÁRIO
$nomeEmpresa = $_POST['nomeEmpresa'];
$emailEmpresa = $_POST['emailEmpresa'];
$telefoneEmpresa = $_POST['telefoneEmpresa'];
$enderecoEmpresa = $_POST['enderecoEmpresa'];
$cepEmpresa = $_POST['cepEmpresa'];
$senhaEmpresa = md5($_POST['senhaEmpresa']);

// INSERÇÃO DOS DADOS NO BANCO
$sql = "INSERT INTO Dados_Empresa  (nomeEmpresa, cnpjEmpresa ,emailEmpresa, telefoneEmpresa, enderecoEmpresa, cepEmpresa, senhaEmpresa)  VALUES  ('$nomeEmpresa', '$cnpjEmpresa', '$emailEmpresa', '$telefoneEmpresa', '$enderecoEmpresa', '$cepEmpresa', '$senhaEmpresa')";   
$res = $conexao->query($sql);

// REDIRECIONA COM BASE NO RESULTADO
if ($res === true) {
    header('Location: ../loginE/loginE.php?usuario=sucesso');
} else {
    header('Location: ../cadastroE/cadastro.php?usuario=falha');
}
?>
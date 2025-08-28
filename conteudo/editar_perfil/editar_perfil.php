 
<?php
if(isset($_FILES['arquivos'])) {
    $arquivo = $_FILES['arquivos'];

    if($arquivo['error'])
    die("Falha ao enviar o arquivo, tente novamente.");

    $pasta = "arquivos/";
    $nomeDoArquivo = $arquivo["name"];
    $novoNomeDoArquivo = uniqid();
    $extensao = strtolower(pathinfo($nomeDoArquivo, PATHINFO_EXTENSION));

    if ($extensao != "jpg" && $extensao != 'png')
    die("Tipo de arquivo não aceito.");

    $deu_certo = move_uploaded_file($arquivo["temp_name"], $pasta . $novoNomeDoArquivo . "." . $extensao);
        if($deu_certo)
        echo "<p>Arquivo enviado com sucesso! Para acessá-lo, <a target=\"_blank\" href=\"arquivos/$novoNomeDoArquivo.$extensao";
        else 
        echo "<p>Falha ao enviar arquivo</p>";
    
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

<?php
require_once "../ConfigBd/porta.php";

// $nomeE = $_POST["nome_evento"];
// $categoriaE = $_POST["categoria"];
// $enderecoE = $_POST["endereco"];
// $tipoE= $_POST["tipo"];
// $tipoE= $_POST["horario"];
// $tipoE= $_POST["descricao"];
// $tipoE= $_POST["img1"];
// $tipoE= $_POST["img2"];
// $tipoE= $_POST["img3"];
// $tipoE= $_POST["img4"];
// $tipoE= $_POST["telefone"];

$sql = "INSERT INTO eventos (Nome_Evento, Categoria, Endereco, Tipo, Horario, Descricao, Img1, Img2, Img3, Img4, Telefone)
VALUES ('nome_evento', 'categoria', 'endereco', 'tipo', horario, descricao, img1, img2, img3, img4, telefone')";
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
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <main>
        <!-- <h1>Adicionar evento </h1> -->
        <form action="Post" action="eventos\evento_indi.php">
            <div class="container-evento">
                <div class="dados_evento">
                    <label for="">Nome</label>
                    <input type="text" name="nome_evento" placeholder="Nome" required>
                   
                </div>
                <div class="dados_evento">
                    <label for="">Categoria</label>
                    <select name="Categoria" id="">
                        <option value="0">Restaurante</option>
                        <option value="bar">Bar</option>
                        <option value="show">Show</option>
                        <option value="parque">Parque</option>
                        <option value="cinema">Cinema</option>
                        <option value="museu">Museu</option>
                    </select>
              
                </div>
                <div class="dados_evento">
                    <label for="">Endereço</label>
                    <input type="text"  name="endereco" placeholder="Endereço" required>
                    
                </div>
                <div class="dados_evento">
                    <select name="Tipo" id="">
                        <option value="0">Geek</option>
                        <option value="cultura">Cultura</option>
                        <option value="musica">Música</option>
                        <option value="evento">Evento</option>
                        <option value="infantil">Infantil</option>
                        <option value="pet">Pet</option>
                        <option value=""></option>
                    </select>
                </div>
                <div class="dados_evento">
                    <label for="">Horário</label>
                    <input type="text" name="horario" placeholder="Horário" required>
                    
                </div>
                <div class="dados_evento">
                    <label for="">Descrição</label>
                    <input type="text"  name="descricao" placeholder="Descrição" required>
                    
                </div>
                    <div class="dados_evento">
                    <label for="">Telefone</label>
                    <input type="number"  name="telefone" placeholder="Telefone" required>
                    
                </div>
                <button>Adicionar</button>
            </div>
            
        </form>
    </main>
</body>
</html>
<?php
require_once "../ConfigBd/porta.php";

$sql = "INSERT INTO eventos (Nome_Evento, Categoria, Endereco, Tipo, Horario, Descricao, Img1, Img2, Img3, Img4, Telefone)
VALUES ('nome_evento', 'categoria', 'Endereco', 'tipo', horario, descricao, img1, img2, img3, img4, telefone')";
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
        <h1>Adicionar evento </h1>
        <form action="Post">
            <div class="container-evento">
                <div class="dados_evento">
                    <label for="">Nome</label>
                    <input type="text" name="nome_evento" placeholder="Nome" required>
                    <button>Adicionar</button>
                </div>
                <div class="dados_evento">
                    <label for="">Categoria</label>
                    <select name="Categoria" id="">
                        <option value="">Restaurante</option>
                        <option value="">Bar</option>
                        <option value="">Show</option>
                        <option value="">Parque</option>
                        <option value="">Cinema</option>
                        <option value=""></option>
                    </select>
                    <button>Adicionar</button>
                </div>
                <div class="dados_evento">
                    <label for="">Endereço</label>
                    <input type="text"  name="endereco" placeholder="Endereço" required>
                    <button>Adicionar</button>
                </div>
                <div class="dados_evento">
                    <select name="Tipo" id="">
                        <option value="">Geek</option>
                        <option value="">Cultura</option>
                        <option value="">Música</option>
                        <option value="">Evento</option>
                        <option value="">Infantil</option>
                        <option value="">Pet</option>
                        <option value=""></option>
                    </select>
                </div>
                <div class="dados_evento">
                    <label for="">Horário</label>
                    <input type="text" name="horario" placeholder="Horário" required>
                    <button>Adicionar</button>
                </div>
                <div class="dados_evento">
                    <label for="">Descrição</label>
                    <input type="text"  name="descricao" placeholder="Descrição" required>
                    <button>Adicionar</button>
                </div>
                    <div class="dados_evento">
                    <label for="">Telefone</label>
                    <input type="number"  name="telefone" placeholder="Telefone" required>
                    <button>Adicionar</button>
                </div>
            </div>
        </form>
    </main>
</body>
</html>
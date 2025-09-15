<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="criar.css">
    <title>Criar Evento</title>
</head>

<body>

    <div class="container">
        <h1>Criar Evento</h1>
        <form action="criar_evento.php" method="POST">
            <label for="nome">Nome do evento:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="categoria">Categoria:</label>
            <select name="categoria" id="categoria">
                <option value="restaurante">Restaurante</option>
                <option value="cultural">Cultura</option>
                <option value="shows">Show</option>
                <option value="baladas">Balada</option>
            </select>

            <label for="endereco">Endereço:</label>
            <textarea id="endereco" name="endereco" required></textarea>

            <label for="horario">Horário:</label>
            <input type="time" id="horario" name="horario" required>
            
            <label for="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" required>

            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" required></textarea>

            <label for="imagens">Imagens do evento (até 4):</label>
            <input type="file" id="imagens" name="imagens[]" accept="image/*" multiple>

            <button type="submit">Criar Evento</button>
        </form>
    </div>
</body>

</html>
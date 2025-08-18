<?php include 'conexao.php'; ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Chat em PHP</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body { font-family: Arial; background: #f4f4f4; }
        #caixa-chat {
            width: 400px; height: 300px; border: 1px solid #ccc;
            overflow-y: scroll; padding: 10px; margin-bottom: 10px;
            background: #fff;
        }
        .mensagem { margin: 5px 0; }
        .usuario { font-weight: bold; color: #0077cc; }
    </style>
</head>
<body>

<h2>💬 Chat em PHP</h2>

<div id="caixa-chat"></div>

<form id="form-chat">
    <input type="text" id="usuario" placeholder="Seu nome" required>
    <input type="text" id="texto" placeholder="Digite sua mensagem..." required>
    <button type="submit">Enviar</button>
</form>

<script>
function carregarMensagens() {
    $.get("buscar.php", function(dados) {
        $("#caixa-chat").html(dados);
        $("#caixa-chat").scrollTop($("#caixa-chat")[0].scrollHeight);
    });
}

// Atualiza o chat a cada 2 segundos
setInterval(carregarMensagens, 2000);
carregarMensagens();

// Enviar mensagem via AJAX
$("#form-chat").submit(function(e) {
    e.preventDefault();
    $.post("enviar.php", {
        usuario: $("#usuario").val(),
        texto: $("#texto").val()
    }, function() {
        $("#texto").val("");
        carregarMensagens();
    });
});
</script>

</body>
</html>

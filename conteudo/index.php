<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WGO--Login</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="form">
        <div class="topo">
        <h2>Bem-vindo</h2>
        <img class="avatar" src="./imagens/Icone-usuario.png" alt="User">
        </div>


        <form action="login.php" method="POST">
            <input type="text" name="emailUsuario" placeholder="E-mail" required>
            <input type="password" name="senhaUsuario" placeholder="Senha" required>
            <button type="submit">LOGIN</button>
        </form>

        <div class="links">
            <p><a href="#">Esqueceu seu <b>Nome</b> / <b>Senha</b>?</a></p>
            <p>Não tem uma conta? <a href="cadastrar/cadastro.php">Cadastrar</a></p>
        </div>
    </div>
</body>

</html>
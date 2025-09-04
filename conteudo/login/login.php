<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WGO--Login</title>
    <link rel="stylesheet" href="login.css">
</head>

<header id="header">
    <a href="index.php"><img class="Logo" src="../imagens/WgoIcon2.png" alt="Logo" style="width: 150px;"></a>
    <a style="padding-right: 50px;" href="login/login.php"><img src="../conteudo/imagens/loginn.png" alt="" width="64px"
            color="white"></a>
</header>


<body>
    <div class="card">
        <div class="form">
            <div class="topo">
                <h2>Bem-vindo</h2>
                <img class="avatar" src="../imagens/Icone-usuario.png" alt="User">
            </div>



            <form action="valida_login.php" method="POST">
                <input type="text" name="emailUsuario" placeholder="E-mail" required>

                <input type="password" name="senhaUsuario" placeholder="Senha" required>
                <button type="submit">LOGIN</button>
            </form>

            <div class="links">
                <p><a href="#">Esqueceu seu <b>Nome</b> / <b>Senha</b>?</a></p>
                <p>Não tem uma conta? <a href="../cadastrar/cadastro.php">Cadastrar</a></p>
            </div>
        </div>
    </div>
</body>

</html>
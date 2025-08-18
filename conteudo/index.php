<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Wgo -- Login</title>

</head>

<body>

    <div class="container" style="justify-content: center; align-items: center;">
        <div class="card">
            <div class="card-header" style="color: white; text-align:center;">
                <img class="imgUser" src="../conteudo/imagens/Icone-usuario.png" alt="Ícone de Usuário">

            </div>
            <div class="card-body" style="color:white;">

                <form action="valida_login.php" method="GET">
                    <h3 style="color: black;">Login</h3>

                    <div class="form-group">

                        <input type="text" name="email" id="email" class="input" placeholder="Email">
                    </div>

                    <div class="form-group">
                        <!-- <label for="senha">Senha</label> -->
                        <input type="password" name="senha" id="senha" class="input" placeholder="Senha" required>
                        <div class="text-primary" style="text-align: right;">
                            <a href="../conteudo/cadastrar/cadastro.php" style=" font-size: 12px; margin: 5px; color: #8BA4D5;">Novo? Cadastre-se!</a>
                        </div>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

</body>

</html>
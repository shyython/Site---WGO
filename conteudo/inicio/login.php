<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>AotApp</title>

</head>

<body>

    <div class="container" style="justify-content: center; align-items: center;">
        <div class="card">
            <div class="card-header" style="color: white; text-align:center;">
                <img class="imgUser" src="../imagens/login.png">
                <h3>Login</h3>
            </div>
            <div class="card-body" style="color:white;">

                <form action="valida_login.php" method="GET">

                    <div class="form-group">
                        <!-- <label for="email">Email</label> -->
                        <span id=span1>
                    </div>

                    <div class="form-group">
                        <!-- <label for="senha">Senha</label> -->
                        <input type="password" name="senha" id="senha" class="input" placeholder="Senha" required>
                        <div class="text-primary" style="text-align: right;">
                            <a href="../cadastrar/cadastar.php">Novo? Cadastre-se!</a>
                        </div>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

</body>

</html>
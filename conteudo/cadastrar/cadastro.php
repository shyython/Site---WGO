<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WGO -- Cadastro</title>
    <link rel="stylesheet" href="cadastrar.css">
</head>

<body id="body_cadastrar">
    <header>
        <!-- LOGO -->
        <a href="cadastro.php"><img class="Logo" src="../imagens/Wgo.png" alt="Logo"></a>

        <!-- Barra de pesquisa -->
        <form class="form">
            <button>
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                    aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
            </button>
            <input class="input" placeholder="Type your text" required="" type="text">
            <button class="reset" type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

        </form>
        <!-- botão de notificações -->

    </header>

    <div class="menu">

        <ul>
            <li><a href="/conteudo/inicio/index.html " class="itens1">Inicio</a></li>
            <li> <a href="/conteudo/amigos/Amigos.html" class="itens">Amigos</a></li>
            <li> <a href="/conteudo/Eventos/Eventos.html" class="itens">Eventos</a></li>


            <li>
                <a href="#" class="itens" onclick="abrirMenuConf()">Configurações</a>
                <ul id="configMenu" style="display: none;">
                    <li><a href="/conteudo/cadastrar/cadastrar.html ">Cadastrar</a></li>
                    <li><a href="/conteudo/conf_perfil/Configuracao_Perfil.html">Perfil</a></li>
                    <li><a href="privacidade.html">Ajuda</a></li>

                </ul>
            </li>
        </ul>

    </div>

    <div id="box_cadastrar">
        <form id="form_cadastrar" action="valida_cadastro.php" method="POST">
            <h1>Cadastrar</h1> <br>
            <label for="nome">Nome:</label>
            <input name="nome" type="text" id="input_cadastrar" placeholder="Nome completo"> <br>


            <label for="Usuario">Usuario:</label>
            <input  name="nomeUsuario" type="text" id="input_cadastrar" placeholder="Seu nome de usuario"> <br>

            <label for="Email">Email:</label>
            <input name="email" type="text" id="input_cadastrar" placeholder="E-mail"> <br>

            <label for="Senha">Senha:</label>
            <input name="senha" type="password" id="input_cadastrar" placeholder="Senha">

            <input id="btn_cadastrar" type="submit" value="Cadastrar">

        </form>

        <?php 
        if (isset($_GET['email']) && $_GET['email'] === 'erro') { ?>
            <div class="text-danger" style="text-align: center;"> E-Mail já cadastrado!</div>
        <?php } ?>

       


        <?php
        if (isset($_GET['usuario']) && $_GET['usuario'] === 'sucesso') { ?>
            <script> alert('Usuário cadastrado com Sucesso!');</script>
        <?php } else if (isset($_GET['usuario']) && $_GET['usuario'] != 'sucesso') { ?>
                <script> alert('Erro ao inserir usuário no banco, contate o administador!'); </script>
        <?php } ?>
    </div>

    <script src="cadastrar.js"></script>
</body>

</html>
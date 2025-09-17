<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ver.css">
    <title>Ver Evento</title>
</head>

<body>
    <header id="header">
        <!-- logo -->
        <a href="../home/home.php">
            <img class="Logo" src="../../imagens/WgoIcon2.png" alt="Logo">


        </a>

        <nav>
            <ul>
                <li><a href="../home/home.php">Início</a></li>
                <li><a href="../blog/Blog.php">Blog</a></li>
                <li><a href="../eventos/procurar.php">Eventos</a></li>
                <li class="config">
                    <a href="#" onclick="abrirMenuConf(event)">Configurações</a>
                    <ul id="configMenu">
                        <li><a href="../conteudo/conf_perfil/Configuracao_Perfil.html">Perfil</a></li>
                        <li><a href="../conteudo/privacidade.html">Ajuda</a></li>
                        <li><a href="../crudEventos/criar/criar.php">Criar evento</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <!-- sininho -->
        <div class="btnNot" onclick="abrirNotifi(event)">
            <img src="../../imagens/Sino.png" alt="Notificações">
            <span class="badge">17</span>
        </div>

        <!-- box sininho -->
        <div class="notifi-box" id="box">
            <h2>Notificações <span>17</span></h2>

            <div class="notifi-item">
                <img src="../../imagens/Dav.jpg" alt="Davi" class="img-not">
                <div class="text">
                    <h4>Davi Silva</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div class="notifi-item">
                <img src="../../imagens/Ell.jpg" alt="Ella" class="img-not">
                <div class="text">
                    <h4>Ella Prado</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div class="notifi-item">
                <img src="../../imagens/Bea.jpg" alt="Beatriz" class="img-not">
                <div class="text">
                    <h4>Beatriz Macedo</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div class="notifi-item">
                <img src="../../imagens/Thiago.jpg" alt="Thiago" class="img-not">
                <div class="text">
                    <h4>Thiago Silva</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
        <nav>
            <a href="../logOut.php"><img src="../imagens/sair.png" alt="" width="50px"></a>
    </header>
</body>

</html>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="criar.css">
    <title>Criar Evento</title>
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



        <!-- search -->
        <!-- <div class="pesquisar">
      <input type="text" name="text" class="input" required placeholder="Search...">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
          <title>Search</title>
          <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none"
            stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
            d="M338.29 338.29L448 448"></path>
        </svg>
      </div>
    </div> -->

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

    <div class="container">

        <form action="criar_evento.php" method="POST">
            <h1>Criar Evento</h1>

            <label for="nome">Nome do evento:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="categoria">Categoria:</label>
            <select class="categoria" name="categoria" id="categoria">
                <option value="restaurante">Restaurante</option>
                <option value="cultural">Cultura</option>
                <option value="shows">Show</option>
                <option value="balada">Balada</option>
            </select>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>

            <label for="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" required>



            <h3>Data e Horário</h3>
            <div class="datas">

                <div>
                    <label for="data_inicio">Hora de Início:</label>
                    <input type="time" id="horario" name="horario" required>
                </div>

                <!-- <div>
                        <label for="hora_inicio">Hora de Início:</label>
                        <input type="time" id="hora_inicio" name="hora_inicio" required>
                    </div>
        
                    <div>
                        <label for="data_fim">Data de Término:</label>
                        <input type="date" id="data_fim" name="data_fim" required>
                    </div>

                    <div>
                        <label for="hora_fim">Hora de Término:</label>
                        <input type="time" id="hora_fim" name="hora_fim" required>
                    </div> -->
            </div>
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" name="descricao" required>

            <h3>URLs das Imagens</h3>

            <label for="img1">Imagem 1:</label>
            <input type="url" id="img1" name="img1" placeholder="https://...">
            <br>

            <label for="img2">Imagem 2:</label>
            <input type="url" id="img2" name="img2" placeholder="https://...">
            <br>

            <label for="img3">Imagem 3:</label>
            <input type="url" id="img3" name="img3" placeholder="https://...">
            <br>

            <label for="img4">Imagem 4:</label>
            <input type="url" id="img4" name="img4" placeholder="https://...">

            <button type="submit">Criar Evento</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>

</html>
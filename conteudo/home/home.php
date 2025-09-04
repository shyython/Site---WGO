<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="homee.css">

  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Bem-vindo ao WGO!</title>
</head>

<body>
  <header id="header">
    <!-- logo -->
    <a href="../home/home.php">
      <img class="Logo" src="../imagens/WgoIcon2.png" alt="Logo">
    </a>

    <nav>
      <ul>
        <li><a href="../home/home.php">Início</a></li>
        <li><a href="../blog/Blog.php">Blog</a></li>
        <li><a href="../eventos/eventos.php">Eventos</a></li>
        <li class="config">
          <a href="#" onclick="abrirMenuConf(event)">Configurações</a>
          <ul id="configMenu">
            <li><a href="../conteudo/cadastrar/cadastrar.html">Cadastrar</a></li>
            <li><a href="../conteudo/conf_perfil/Configuracao_Perfil.html">Perfil</a></li>
            <li><a href="../conteudo/privacidade.html">Ajuda</a></li>
          </ul>
        </li>
        </li>
      </ul>
    </nav>

    <!-- search -->
    <div class="pesquisar">
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
    </div>

    <!-- sininho -->
    <div class="btnNot" onclick="abrirNotifi(event)">
      <img src="../imagens/Sino.png" alt="Notificações">
      <span class="badge">17</span>
    </div>

    <!-- box sininho -->
    <div class="notifi-box" id="box">
      <h2>Notificações <span>17</span></h2>

      <div class="notifi-item">
        <img src="/conteudo/imagens/Dav.jpg" alt="Davi" class="img-not">
        <div class="text">
          <h4>Davi Silva</h4>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="notifi-item">
        <img src="/conteudo/imagens/Ell.jpg" alt="Ella" class="img-not">
        <div class="text">
          <h4>Ella Prado</h4>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="notifi-item">
        <img src="../imagens/Bea.jpg" alt="Beatriz" class="img-not">
        <div class="text">
          <h4>Beatriz Macedo</h4>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="notifi-item">
        <img src="../imagens/Thiago.jpg" alt="Thiago" class="img-not">
        <div class="text">
          <h4>Thiago Silva</h4>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </header>

  <section class="carrossel">
    <div class="slides"></div>
    <div class="indicadores"></div>
  </section>


  <p id="legenda" style="text-align:center; margin-top: 10px; font-weight:bold;"></p>
  <script src="script.js"></script>
</body>

</html>
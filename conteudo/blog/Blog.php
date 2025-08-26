<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="blogg.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  </style>
  <title>Blog</title>
</head>

<body>

  <header id="header">
    <!-- logo -->
    <a href="../inicio/home.php">
      <img class="Logo" src="../imagens/WgoIcon2.png" alt="Logo">
    </a>

    <nav>
      <ul>
        <li><a href="../inicio/home.php">Início</a></li>
        <li><a href="Blog.html">Blog</a></li>
        <li><a href="../Eventos/Eventos.php">Eventos</a></li>
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

  <img src="../imagens/Blog/fundoBlog.jpg" alt="" class="FundoPraia">

  <!-- posts destaques -->
  <main class="posts">
    <h1 class="destaquesTitle">Destaques da Semana</h1>
    <div class="post">
      <img src="../imagens/Blog/barAcaiPost.jpg" alt="" class="post-img">
      <div class="container-post">
        <h3>Restaurante Bar Açaí</h3>
        <p>Esse restaurante perfeito na estética e no paladar aqui na baixada santista! amei</p>
        <div class="post-footer">
          <button class="like-btn">❤️ 120</button>
          <span>15 comentários</span>
        </div>
      </div>
    </div>

    <div class="post">
      <img src="../imagens/Blog/telefericoPost.jpg" alt="" class="post-img">
      <div class="container-post">
        <h3>Teleférico de São Vicente</h3>
        <p>Uma subida incrível com a visão da praia toda</p>
        <div class="post-footer">
          <button class="like-btn">❤️ 87</button>
          <span>8 comentários</span>
        </div>
      </div>
    </div>

    <div class="post">
      <img src="../imagens/Blog/bondePost.jpg" alt="" class="post-img">
      <div class="container-post">
        <h3>Bondinho de Santos</h3>
        <p>O passeio certo para conhecer o tão famoso Monte Serrat</p>
        <div class="post-footer">
          <button class="like-btn">❤️ 65</button>
          <span>12 comentários</span>
        </div>
      </div>
    </div>
  </main>

  <script src="Blogg.js"></script>
</body>

</html>
<!DOCTYPE html> 
<html lang="en">  

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <script></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">    
    <title>Bem-vindo ao WGO!</title>
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

 


    <div class="container">
        <aside class="containerlateral">

            <div class="itensordem1">
                <p>Restaurantes</p>
            </div>

            <div class="itensordem2">
                <p class="textolateral">Show</p>
            </div>

            <div class="itensordem3">
                <p class="textolateral">Standup's</p>
            </div>
        </aside>
    </div>

  <!-- destaques -->
  <p class="Destaque"> Destaque em:</p>
  <div class="carrossel" >
      <div class="imagens">
          <img src="https://www.infomoney.com.br/wp-content/uploads/2025/03/cidadedesaopaulo.com-lollapalooza-brasil-2025-cidadedesaopaulo.com-lollapalooza-brasil-2025-lollapalooza-publico-250322-fotos-daniel-deak-0043.jpg?fit=1250%2C833&quality=50&strip=all" alt="Imagem 1">
          <img src="https://i.em.com.br/i3TLHVhw911tL6tnkIPNnbKXQ5c=/1200x720/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/08/31/1554448/the-town_1_158021.jpeg" alt="Imagem 2">
          <img src="https://s.abcnews.com/images/Entertainment/coachella-2017-02-gty-jc-180411_hpMain.jpg" alt="Imagem 3">
          <img src="https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/175/imagem-destaque-rock-in-rio-card-2022.jpg" alt="Imagem 4">
      </div>
  </div>
  <!-- fim destaques -->

    </div>
    <script src="script.js"></script>
</body>
</html>
</html>
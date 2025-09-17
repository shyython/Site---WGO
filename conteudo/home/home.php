<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="homee.css">
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-brands/css/uicons-brands.css'>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
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
        <img src="../imagens/Dav.jpg" alt="Davi" class="img-not">
        <div class="text">
          <h4>Davi Silva</h4>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="notifi-item">
        <img src="../imagens/Ell.jpg" alt="Ella" class="img-not">
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

  <main class="conteudo-principal">

    <section class="carrossel">
      <div class="slides"></div>
      <div class="indicadores"></div>
    </section>
    <!--select estado-->
    <div class="selectEstado1">
      <select id="estado1">
        <option value="" disabled selected class="selectTxt">Selecione seu Estado</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </div>
    <!--categorias-->
    <div class="categoria">
      <div class="categoria2" janela-title="Baladas"
        janela-descri="As melhores baladas da cidade para você curtir a noite."
        janela-img="../imagens/home/baladaHome.webp">
        <img src="../imagens/home/baladaHome.webp" alt="Baladas" class="imgCategoria">
        <p class="txtCategoria">Baladas</p>
      </div>

      <div class="categoria2" janela-title="Esportes"
        janela-descri="Locais e eventos esportivos para praticar e assistir."
        janela-img="../imagens/home/esportesHome.jpg">
        <img src="../imagens/home/esportesHome.jpg" alt="Esportes" class="imgCategoria">
        <p class="txtCategoria">Esportes</p>
      </div>

      <div class="categoria2" janela-title="Restaurantes" janela-descri="Restaurantes variados para todos os gostos."
        janela-img="../imagens/home/restaurantesHome.jpg">
        <img src="../imagens/home/restaurantesHome.jpg" alt="Restaurantes" class="imgCategoria">
        <p class="txtCategoria">Restaurantes</p>
      </div>

      <div class="categoria2" janela-title="Cultura" janela-descri="Experiências culturais e artísticas para todos."
        janela-img="../imagens/home/culturaHome.jpg">
        <img src="../imagens/home/culturaHome.jpg" alt="Cultura" class="imgCategoria">
        <p class="txtCategoria">Cultura</p>
      </div>

      <div class="categoria2" janela-title="Eventos Comunitários"
        janela-descri="Participe de eventos locais e comunitários." janela-img="../imagens/home/eventosComuniHome.jpg">
        <img src="../imagens/home/eventosComuniHome.jpg" alt="Pontos Turísticos e Históricos" class="imgCategoria">
        <p class="txtCategoria">Eventos Comunitários</p>

      </div>

      <div class="categoria2" janela-title="Pontos Turísticos e Históricos"
        janela-descri="Conheça os principais pontos turísticos e históricos da região."
        janela-img="../imagens/home/historicoHome.webp">
        <img src="../imagens/home/historicoHome.webp" alt="Pontos Turísticos e Históricos" class="imgCategoria">
        <p class="txtCategoria">Pontos Turísticos e Históricos</p>
      </div>

      <div class="categoria2" janela-title="Praias e Ar Livre"
        janela-descri="Aproveite praias e atividades ao ar livre." janela-img="../imagens/home/praiaHome.jpg">
        <img src="../imagens/home/praiaHome.jpg" alt="Praias e Ar Livre" class="imgCategoria">
        <p class="txtCategoria">Praias e Ar Livre</p>
      </div>
    </div>


    <div class="container-janela">
      <div class="janelaInfo" id="janela">
        <h2 id="janelaTitle">Título inicial</h2>

        <img id="janelaImg" src="" alt="Imagem da categoria">

        <button id="esquerda-button" aria-label="Slide para a esquerda">
          <img src="../imagens/home/arrow2.png" alt="seta esquerda" />
        </button>

        <div class="janela-img"></div>
        <button id="direita-button" aria-label="Slide para a direita">
          <img src="../imagens/home/arrow.png" alt="seta direita" />
        </button>

        <main class="janela-galeria" role="main" aria-label="Galeria de imagens" style="display:none;">

          <aside class="destaques-janela">
            <h2 class="titulo-destaque">Título destaque</h2>
            <p class="descricao">Descrição destaque</p>
          </aside>

        </main>

        <p id="janelaContent">Conteúdo da janela</p>
        <button id="btnFechar">Fechar</button>
      </div>
    </div>

    <div class="rodape">
      <ul class="rodape-icons">
        <a href="#"><img src="../imagens/home/facebook.png" alt="Facebook" class="icon-rodape"></a>
        <a href="#"><img src="../imagens/home/insta.png" alt="Instagram" class="icon-rodape"></a>
        <a href="#"><img src="../imagens/home/github.png" alt="Github" class="icon-rodape"></a>
      </ul>
      <div class="dados-rodape">
        <p>Av. Conselheiro Nébias, 309 - Vila Mathias - Santos - SP</p>
        <p style="margin-top: 10px;">© 2025 WGO. O mundo é vasto e cheio de surpresas – permita-se descobrir, sentir e
          se apaixonar por novos lugares.</p>

        <div class="contato-rodape">

          <div class="telefone-rodape">
            <img src="../imagens/home/telefone.png" alt="" style="width: 20px; height: auto;">
            <p>+55 13930801523</p>
          </div>

          <div class="email-rodape">
            <img src="../imagens/home/email.png" alt="" style="width: 20px;">
            <p>wegooutturimo@hotmail.com</p>
          </div>

        </div>

        <div class="logo-rodape">
          <img src="../imagens/WgoIcon2.png" alt="" style="width: 200px; height: auto;">
        </div>

      </div>
    </div>

  </main>
  <script>
    $(document).ready(function () {
      $('#estado').select2();
    });
  </script>


  <p id="legenda" style="text-align:center; margin-top: 10px; font-weight:bold;"></p>
  <script src="script.js"></script>
</body>

</html>
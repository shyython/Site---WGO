<?php
 require "ConfigBd.php";

  $sql = "SELECT * FROM Eventos";
   
            $res = $conexao->query($sql);
            $qtd = $res->num_rows;

            $resEventos = $conexao->query($sql);
            $qtdEventos = $resEventos->num_rows;
            $row = $res->fetch_object()
  
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="teste.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
    <script src="EventoIndividual.js" defer></script>
    <title>Bem-vindo ao WGO!</title>
</head>

<body>

    <!-- Cabeçalho geral -->
    <header>
        <a href="/inicio/index.html"><img class="Logo" src="/conteudo/imagens/WgoIcon.png" alt="Logo"></a>
        <form class="form">
            <!-- Barra de pesquisa -->
            <input class="input" placeholder="Pesquisar" required="" type="text">
            <button>
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                    aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
            </button>
            <!-- Cadastros -->
        </form>
        <a class="Login" href="cadastrar.html">Cadastrar</a>
        <a class="Login" href="entrar.html">entrar</a>

    </header>
    <!-- Barra de interações -->
    <div class="menu">

        <ul>
            <li><a href="/conteudo/inicio/index.html" class="itens">Inicio</a></li>
            <li> <a href="/conteudo/amigos/Amigos.html" class="itens">Amigos</a></li>
            <li> <a href="/conteudo/Eventos/Eventos.html" class="itens3">Eventos</a></li>
            <li> <a href="/conteudo/configuracoes/Configuracao.html" class="itens">Configurações</a></li>
            <li> <a href="Ajuda" class="itens">Ajuda</a></li>
        </ul>
        <main>
            <aside>
                <div class="BoxEvento">
                    <?php
                    print "<h1 class='TituloEvento'>" . $row->Nome_Evento . "</h1>";
                    ?>
                    <?php
                    print "<img src=". $row->Foto . "' alt='' class='ImagemEvento'>";
                    ?>
                </div>
            </aside>
            <div>
                <?php
                print "<p class='DescricaoEvento'>". $row->Descricao ."</p>";
                ?>
                <div class="interacoes">
                    <div class="botoes">
                        <button class="ButtonComp"><img src="/conteudo/imagens/compartilhar.png" alt="" class="ButtonCompartilhar"></button>
                        <button class="ButtonPresenca">Marcar presença</button>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <h2 class="ideias">Sugestões</h2>
            <div class="sugestoes">
                <h2 class="ideias"> </h2>
                <div class="sugestao1">
                    <p class="TituloSugestao">Bistro Calixto</p>
                    <img src="/conteudo/imagens/Bistro Calixto.jpg" alt="" class="ImagemSugestao">
                    <a href="/conteudo/Eventos/Evento/Restaurante-Bistro_Calixtro.html"><button class="BtnSugestao">Ver Mais</button></a> 
                </div>
                <div class="sugestao2">
                    <p class="TituloSugestao">Jhony Rockets</p>
                    <img src="/conteudo/imagens/Jhony.jpg" alt="" class="ImagemSugestao">
                   <a href="/conteudo/Eventos/Evento/Restaurante-Jhonny.html"><button class="BtnSugestao">Ver Mais</button></a> 
                </div>
                <div class="sugestao3">
                    <p class="TituloSugestao">Viela</p>
                    <img src="/conteudo/imagens/Viela.jpg" alt="" class="ImagemSugestao">
                    <a href="/conteudo/Eventos/Evento/Restaurante-Viela_Grastronomica.html"><button class="BtnSugestao">Ver Mais</button></a> 
                </div>
            </div>
        </main>         
</body>

</html>
<style>
    
</style>
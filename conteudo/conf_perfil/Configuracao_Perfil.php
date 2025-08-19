 
<?php
if(isset($_FILES['arquivos'])) {
    $arquivo = $_FILES['arquivos'];

    if($arquivo['error'])
    die("Falha ao enviar o arquivo, tente novamente.");

    $pasta = "arquivos/";
    $nomeDoArquivo = $arquivo["name"];
    $novoNomeDoArquivo = uniqid();
    $extensao = strtolower(pathinfo($nomeDoArquivo, PATHINFO_EXTENSION));

    if ($extensao != "jpg" && $extensao != 'png')
    die("Tipo de arquivo não aceito.");

    $deu_certo = move_uploaded_file($arquivo["temp_name"], $pasta . $novoNomeDoArquivo . "." . $extensao);
        if($deu_certo)
        echo "<p>Arquivo enviado com sucesso! Para acessá-lo, <a target=\"_blank\" href=\"arquivos/$novoNomeDoArquivo.$extensao";
        else 
        echo "<p>Falha ao enviar arquivo</p>";
    
}
?>
 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Configuracao_Perfil.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>Bem-vindo ao WGO!</title>
</head>

<body>

    <!-- Cabeçalho geral -->
    <header>
        <a href="/conteudo/inicio/index.html"><img class="Logo" src="/conteudo/imagens/WgoIcon.png" alt="Logo"></a>
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

        <!-- NOTICACOES  -->
        <nav>
            <div class="icon" onclick="abrirNotifi()">
                <img src="/conteudo/imagens/Sino.png" alt=""> <span>17</span>
            </div>
            <div class="notifi-box" id="box">
                <h2>Notifications <span>17</span></h2>
                <div class="notifi-item">
                    <img src="/conteudo/imagens/Dav.jpg" alt="img" class="img-not">
                    <div class="text">
                        <h4>Davi Silva</h4>
                        <p>@lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <div class="notifi-item">
                    <img src="/conteudo/imagens/Ell.jpg" alt="img" class="img-not">
                    <div class="text">
                        <h4>Ella Prado</h4>
                        <p>@lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <div class="notifi-item">
                    <img src="/conteudo/imagens/Bea.jpg" alt="img" class="img-not">
                    <div class="text">
                        <h4>Beatriz macedo</h4>
                        <p>@lorem ipsum dolor sit amet</p>
                    </div>
                </div>


                <div class="notifi-item">
                    <img src="/conteudo/imagens/Thiago.jpg" alt="img" class="img-not">
                    <div class="text">
                        <h4>Thiago Silva</h4>
                        <p>@lorem ipsum dolor sit amet</p>
                    </div>
                </div>

            </div>
        </nav>


    </header>
    <!-- Barra de interações -->
    <div class="menu">

        <ul>
            <li><a href="/conteudo/inicio/" class="itens">Inicio</a></li>
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

    <main>
        <!-- Perfil -->
        <form enctype="multipart/form-data" action="">
            <div id="container_perfil">
            <!-- Foto do usuario -->
            <div class="usuario">
                <div class="div-itens-config">
                    <p><?php /*print $row->Nome; */?></p>
                    <?php /*print" <img src=". $row->foto . ">";*/ ?>
                 </div>
                 <!-- <div class="div-seguir">
                    
                    <button class="btn-seguir">Seguir</button>
                    <button class="btn-mensagem">Enviar mensagem</button>
                 </div> -->
                 <div class="container-obj">
                    <div class="div-seguidores">
                        <div class="div-img">
                            <img src="/conteudo/imagens/Icone-usuario.png" alt="" id="ImagemPerfil">
                            <input name="arquivo" type="file">
                            <button name="upload" type="submit">enviar foto</button>
                        </div>
                        <label for="">posts</label>
                        <label for="">seguidores</label>
                        <label for="">seguindo</label>
                    </div>
                    <div class="div-descricao">
                        <p>Descrição</p>
                        <a href="">teste</a>
                    </div>
                    <div class="container-btns">
                        <button class="BtnEditar"><a href="/conteudo/editar_perfil/editar_perfil.php">Editar Perfil</a></button>
                        <button class="BtnCompartilhar">Compartilhar Perfil</button>
                    </div>
                    <div class="resumo">
                        <!-- <input type="text" placeholder="Apelido" class="Apelido">
                        <input type="text" placeholder="Bio" class="Bio"> -->
                        <!-- Redes Sociais -->
                        <!-- <div class="redes">
                            <div class="add">
                                <img src="/conteudo/imagens/instagram.png" alt="" class="insta">
                                <button class="buttonadd"><img src="/conteudo/imagens/add.png" alt=""
                                        class="imgadd"></button>
                            </div>
                            <div class="add">
                                <img src="/conteudo/imagens/twitter.png" alt="" class="twitter">
                                <button class="buttonadd"><img src="/conteudo/imagens/add.png" alt=""
                                        class="imgadd"></button>
                            </div>
                            <div class="add">
                                <img src="/conteudo/imagens/facebook.png" alt="" class="face">
                                <button class="buttonadd"><img src="/conteudo/imagens/add.png" alt=""
                                        class="imgadd"></button>
                            </div>
                        </div> -->
                    </div>
                </div>



            </div>
        </form>
            <div class="sla">
                <ul class="li_perfil_funcoes">
                    <li class="li_perfil_funcoes"><a href="">Publicações</a></li>
                    <li class="li_perfil_funcoes"><a href="">Confirmados</a></li>
                    <li class="li_perfil_funcoes"><a href="">Salvos</a></li>
                </ul>
            </div>
        </div>
    </main>
    <script src="conf_perfil.js"></script>
</body>
</html>
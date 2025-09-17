<?php
include('../login/config.php');
require_once "../loginE/validador_acesso.php";

$id_usuario = $_SESSION['id_usuario'];

// Inicializa os dados
$usuario = [
    'tipoUsuario' => '',
    'nome' => '',
    'username' => '',
    'data_nasc' => '',
    'foto' => '',
    'emailUsuario' => '',
    'descricao' => '',
    'telefone' => '',
];

// Busca os dados
$stmt = $conexao->prepare("SELECT tipoUsuario, nome, username, data_nasc, foto, emailUsuario, descricao, telefone FROM dados_usuarios WHERE id_usuario = ?");
$stmt->bind_param("i", $id_usuario);
$stmt->execute();
$stmt->bind_result(
    $usuario['tipoUsuario'],
    $usuario['nome'],
    $usuario['username'],
    $usuario['data_nasc'],
    $usuario['foto'],
    $usuario['emailUsuario'],
    $usuario['descricao'],
    $usuario['telefone']
);

if ($stmt->fetch()) {
    // Verifica se a URL da imagem está vazia e define uma imagem padrão
    if (empty($usuario['foto'])) {
        $usuario['foto'] = 'https://via.placeholder.com/150'; // Ou caminho local padrão
    }
}
$stmt->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="perfil.css">
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
                <li><a href="../eventos/procurar.php">Eventos</a></li>
                <li class="config">
                    <a href="#" onclick="abrirMenuConf(event)">Configurações</a>
                    <ul id="configMenu">
                        <li><a href="../../conteudo/conf_perfil/perfil.php">Perfil</a></li>
                        <li><a href="./privacidade.html">Ajuda</a></li>
                        <li><a href="../crudEventos/criar/criar.php">Criar evento</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <!-- sininho -->
        <div class="btnNot" onclick="abrirNotifi(event)">
            <img src="../imagens/Sino.png" alt="Notificações">
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

    <main>
        <!-- Perfil -->

        <div id="container_perfil">
            <!-- Foto do usuario -->
            <div class="usuario">
                <div class="div-itens-config">
                    <p id="NomePerfil"><?php echo htmlspecialchars($usuario['username']); ?></p>
                    <button class="btn-config">
                        <a href=""><img class="img-config" src="https://cdn-icons-png.flaticon.com/128/2956/2956788.png"
                                alt=""></a>
                    </button>
                </div>
                <!-- <div class="div-seguir">
                    
                    <button class="btn-seguir">Seguir</button>
                    <button class="btn-mensagem">Enviar mensagem</button>
                </div> -->
                <div class="container-obj">
                    <div class="div-seguidores">
                        <div class="div-img">
                            <img src="<?php echo htmlspecialchars($usuario['foto']); ?>" alt="Foto de Perfil"
                                id="ImagemPerfil">
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
                        <button class="BtnEditar">Editar Perfil</button>
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

            <div class="sla">
                <ul id="li_perfil_funcoes">
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
<?php
require_once "../../login/validador_acesso.php";
require_once "../../login/config.php";

if (!isset($_GET['id'])) {
    echo "ID do evento não fornecido.";
    exit;
}

$id_evento = intval($_GET['id']);

$sql = "SELECT * FROM eventos WHERE Id_Evento = ?";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("i", $id_evento);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo "Evento não encontrado.";
    exit;
}

$evento = $result->fetch_object();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="atualizar.css" />
    <title>Atualizar Evento</title>
</head>

<body>
    <header id="header">
        <a href="../home/home.php">
            <img class="Logo" src="../../imagens/WgoIcon2.png" alt="Logo" />
        </a>

        <nav>
            <ul>
                <li><a href="../../home/home.php">Início</a></li>
                <li><a href="../../blog/Blog.php">Blog</a></li>
                <li><a href="../../eventos/procurar.php">Eventos</a></li>
                <li class="config">
                    <a href="#" onclick="abrirMenuConf(event)">Configurações</a>
                    <ul id="configMenu">
                        <li><a href="../../conteudo/conf_perfil/Configuracao_Perfil.html">Perfil</a></li>
                        <li><a href="../conteudo/privacidade.html">Ajuda</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="btnNot" onclick="abrirNotifi(event)">
            <img src="../../imagens/Sino.png" alt="Notificações" />
            <span class="badge">17</span>
        </div>

        <div class="notifi-box" id="box">
            <h2>Notificações <span>17</span></h2>

            <div class="notifi-item">
                <img src="../../imagens/Dav.jpg" alt="Davi" class="img-not" />
                <div class="text">
                    <h4>Davi Silva</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div class="notifi-item">
                <img src="../../imagens/Ell.jpg" alt="Ella" class="img-not" />
                <div class="text">
                    <h4>Ella Prado</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div class="notifi-item">
                <img src="../../imagens/Bea.jpg" alt="Beatriz" class="img-not" />
                <div class="text">
                    <h4>Beatriz Macedo</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div class="notifi-item">
                <img src="../../imagens/Thiago.jpg" alt="Thiago" class="img-not" />
                <div class="text">
                    <h4>Thiago Silva</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <nav>
            <a href="../logOut.php"><img src="../imagens/sair.png" alt="" width="50px" /></a>
        </nav>
    </header>

    <main class="container" style="max-width: 700px; margin: 40px auto;">
        <div class="card">
            <h1 style="color: #3C4E69;">Editar Evento</h1>

            <form action="config_evento.php" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="Id_Evento" value="<?php echo $evento->Id_Evento; ?>" />

                <label for="Nome_Evento">Nome do Evento:</label><br />
                <input type="text" id="Nome_Evento" name="Nome_Evento" required
                    value="<?php echo htmlspecialchars($evento->Nome_Evento); ?>" /><br /><br />

                <label for="Categoria">Categoria:</label><br />
                <input type="text" id="Categoria" name="Categoria" required
                    value="<?php echo htmlspecialchars($evento->Categoria); ?>" /><br /><br />

                <label for="Endereco">Endereço:</label><br />
                <input type="text" id="Endereco" name="Endereco" required
                    value="<?php echo htmlspecialchars($evento->Endereco); ?>" /><br /><br />

                <label for="Tipo">Tipo:</label><br />
                <input type="text" id="Tipo" name="Tipo" required
                    value="<?php echo htmlspecialchars($evento->Tipo); ?>" /><br /><br />

                <label for="Horario">Horário:</label><br />
                <input type="date" id="Horario" name="Horario" required
                    value="<?php echo htmlspecialchars($evento->Horario); ?>" /><br /><br />

                <label for="Descricao">Descrição:</label><br />
                <input type="text" id="Descricao" name="Descricao"
                    value="<?php echo htmlspecialchars($evento->Descricao); ?>" /><br /><br />

                <label for="Img1">Imagem 1 URL:</label><br />
                <input type="text" id="Img1" name="Img1"
                    value="<?php echo htmlspecialchars($evento->Img1); ?>" /><br /><br />

                <label for="Img2">Imagem 2 URL:</label><br />
                <input type="text" id="Img2" name="Img2"
                    value="<?php echo htmlspecialchars($evento->Img2); ?>" /><br /><br />

                <label for="Img3">Imagem 3 URL:</label><br />
                <input type="text" id="Img3" name="Img3"
                    value="<?php echo htmlspecialchars($evento->Img3); ?>" /><br /><br />

                <label for="Img4">Imagem 4 URL:</label><br />
                <input type="text" id="Img4" name="Img4"
                    value="<?php echo htmlspecialchars($evento->Img4); ?>" /><br /><br />

                <button type="submit"
                    style="padding: 10px 20px; background-color: #fe6a07; color: white; border: none; cursor: pointer; width: 200px;">Salvar
                    Alterações</button>
            </form>

            <form action="../deletar/deletar.php" method="POST"
                onsubmit="return confirm('Tem certeza que deseja deletar este evento?');" style="display: inline;">
                <input type="hidden" name="id_Evento" value="<?php echo $evento->Id_Evento; ?>">
                <button type="submit" class="btn btn-delete"
                    style="margin-top: 20px; background-color: #dc3545; color: white; padding: 10px 20px; border: none; cursor: pointer; width: 200px;">Deletar</button>
            </form>
        </div>
    </main>

    <script src="atualizar.js"></script>
</body>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="ver.css">
    <title>Document</title>
</head>

<body>

    <header id="header">
        <!-- logo -->
        <a href="../home/home.php">
            <img class="Logo" src="../../imagens/WgoIcon2.png" alt="Logo">


        </a>

       <nav>
            <ul>
                <li><a href="../../home/home.php">Início</a></li>
                <li><a href="../../blog/Blog.php">Blog</a></li>
                <li><a href="../../eventos/procurar.php">Eventos</a></li>
                <li class="config">
                    <a href="#" onclick="abrirMenuConf(event)">Configurações</a>
                    <ul id="configMenu">
    
                        <li><a href="../crud_eventos.php"> Eventos</a></li>
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
    <div class="container">
        <?php
        session_start();

        require '../../login/config.php'; // arquivo com conexão $conexao
        
        // Verifica se a empresa está na sessão
        if (!isset($_SESSION['id_empresa'])) {
            echo "Você precisa estar logado para ver os eventos.";
            exit;
        }

        $id_empresa = $_SESSION['id_empresa'];

        // Preparar a consulta para buscar eventos da empresa
        $sql = "SELECT * FROM eventos WHERE id_empresa = ?";
        $stmt = $conexao->prepare($sql);
        $stmt->bind_param("i", $id_empresa);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {

            echo "<h2 style='color: #000000ff; margin-bottom: 20px; text-align: center;'>Eventos da sua empresa:</h2><ul>";
            echo "<div class='cards-container'>";
            while ($evento = $result->fetch_assoc()) {

                echo "<div class='card'>";
                echo "<p style='margin-bottom: 20px; text-align: center;'>";
                echo "<strong style='color: #3C4E69; font-size: 18px; text-align: center;'>" . htmlspecialchars($evento['Nome_Evento']) . "</strong><br>";
                echo "<p style='text-align: center;'>Endereço: " . htmlspecialchars($evento['Endereco']) . "<br>";
                echo "<p style='text-align: center;'>Tipo: " . htmlspecialchars($evento['Tipo']) . "<br>";
                echo "<p style='text-align: center;'>Horário: " . htmlspecialchars($evento['Horario']) . "<br>";
                echo "<p style='text-align: center;     '>Descrição: " . nl2br(htmlspecialchars($evento['Descricao'])) . "<br>";

                // Exemplo para mostrar a primeira imagem, se existir
                if (!empty($evento['Img1'])) {
                    echo "<img src='" . htmlspecialchars($evento['Img1']) . "' alt='Imagem do evento' style='max-width:300px; margin-bottom: 40px;'><br>";
                }
                echo "</li><hr>";

                echo "</p>";
                echo "<a href='../atualizar/atualizar.php?id=" . $evento['Id_Evento'] . "' class='btn'>Editar</a> ";
                echo "</div>";
            }
            echo "</ul>";
        } else {
            echo "<p style='text-align: center;'>Nenhum evento encontrado para sua empresa.</p>";
        }
        echo "</div>";

        $stmt->close();
        $conexao->close();
        ?>




    </div>

    <script src="ver.js"></script>
</body>

</html>
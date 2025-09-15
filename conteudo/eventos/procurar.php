<?php
require_once "../login/validador_acesso.php";
require_once "../ConfigBd/porta.php";

// Destaques de eventos aleatórios
$sqlEventos = "SELECT * FROM eventos ORDER BY RAND() LIMIT 3";
$resEventos = $conexao->query($sqlEventos);

// pega 3 registros (ou menos, se não houver)
$row = $resEventos->fetch_object();
$row2 = $resEventos->fetch_object();
$row3 = $resEventos->fetch_object();

// Restaurantes
$sqlRestaurantes = "SELECT * FROM eventos 
                    WHERE Categoria = 'Restaurante' 
                    ORDER BY RAND() LIMIT 3";
$resR = $conexao->query($sqlRestaurantes);

// pega até 3 restaurantes
$rowR = $resR->fetch_object();
$rowR2 = $resR->fetch_object();
$rowR3 = $resR->fetch_object();

// Cultura
$sqlCultura = "SELECT * FROM eventos 
                    WHERE Categoria = 'Cultural' 
                    ORDER BY RAND() LIMIT 3";
$resC = $conexao->query($sqlCultura);

// pega até 3 lugares culturais
$rowC = $resC->fetch_object();
$rowC2 = $resC->fetch_object();
$rowC3 = $resC->fetch_object();


// Entretenimento
$sqlEntrenimento = "SELECT * FROM eventos 
                    WHERE Categoria = 'Entretenimento' 
                    ORDER BY RAND() LIMIT 3";
$resE = $conexao->query($sqlEntrenimento);

// pega até 3 entretenimentos
$rowE = $resE->fetch_object();
$rowE2 = $resE->fetch_object();
$rowE3 = $resE->fetch_object();

// Show's
$sqlShows = "SELECT * FROM eventos 
                    WHERE Categoria = 'Shows' 
                    ORDER BY RAND() LIMIT 3";
$resS = $conexao->query($sqlShows);

// pega até 3  shows
$rowS = $resS->fetch_object();
$rowS2 = $resS->fetch_object();
$rowS3 = $resS->fetch_object();


// Baladas
$sqlBaladas = "SELECT * FROM eventos 
                    WHERE Categoria = 'Balada' 
                    ORDER BY RAND() LIMIT 3";
$resB = $conexao->query($sqlBaladas);

// pega até 3  baladas
$rowB = $resB->fetch_object();
$rowB2 = $resB->fetch_object();
$rowB3 = $resB->fetch_object();


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="procurar.css">
    <title>Eventos</title>
</head>


<body>
    <header id="header">
        <!-- logo -->
        <a href="../home/home.php">
            <img class="" src="../imagens/WgoIcon2.png" alt="Logo" width="150px">
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
        <nav>
            <a href="../logOut.php"><img src="../imagens/sair.png" alt="" width="50px"></a>
    </header>

    <div class="container">
        <h2>Destaques</h2>

        <div class="Destaques">
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $row->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $row->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $row->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $row->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $row->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $row2->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $row2->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $row2->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $row2->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $row2->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $row3->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $row3->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $row3->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $row3->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $row3->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>

        </div>

        <!-- RESTAURANTES -->
        <br>
        <h2>Restaurantes</h2>

        <div class="Destaques">
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowR->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowR->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowR->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowR->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowR->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowR2->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowR2->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowR2->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowR2->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowR2->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowR3->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowR3->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowR3->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowR3->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowR3->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
        </div>


        <!-- CULTURA -->
        <br>
        <h2>Cultural</h2>

        <div class="Destaques">
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowC->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowC->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowC->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowC->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowC->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowC2->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowC2->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowC2->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowR2->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowC2->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowC3->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowC3->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowC3->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowC3->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowC3->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
        </div>

        <!-- Diversão -->


        <br>
        <h2>Entretenimento</h2>

        <div class="Destaques">
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowE->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowE->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowE->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowE->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowE->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowE2->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowE2->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowE2->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowE2->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowE2->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowE3->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowE3->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowE3->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowE3->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowE3->Id_Evento ?>">Ver mais</a>

                    </div>
                </form>

            </Div>
        </div>
        <!-- Show's -->
        <br>
        <h2>Show's</h2>

        <div class="Destaques">
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowS->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowS->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowS->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowS->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowS->Id_Evento ?>">Ver
                            mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowS2->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowS2->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowS2->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowS2->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowS2->Id_Evento ?>">Ver
                            mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowS3->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowS3->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowS3->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowS3->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowS3->Id_Evento ?>">Ver
                            mais</a>

                    </div>
                </form>

            </Div>
        </div>

        <!-- Baladas -->
        <br>
        <h2>Baladas</h2>

        <div class="Destaques">
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowB->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowB->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowB->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowB->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowB->Id_Evento ?>">Ver
                            mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowB2->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowB2->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowB2->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowB2->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowB2->Id_Evento ?>">Ver
                            mais</a>

                    </div>
                </form>

            </Div>
            <Div class="CardDestaque">

                <img class='ImgDestaque' src=' <?php print $rowB3->Img1 ?>' alt=''>

                <form action="evento_indi.php?id=<?php print $rowB3->Id_Evento ?>" method="GET">

                    <div class='InfoDestaque'>
                        <h3><?php print $rowB3->Nome_Evento; ?></h3>
                        <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' />
                            <?php print $rowB3->Endereco; ?></p>
                        <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $rowB2->Id_Evento ?>">Ver
                            mais</a>

                    </div>
                </form>

            </Div>

        </div>

        <script src="procurar.js"></script>
</body>

</html>
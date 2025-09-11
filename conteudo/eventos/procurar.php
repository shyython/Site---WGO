<?php
require_once "../login/validador_acesso.php";
require_once "../ConfigBd/porta.php";

/* ========================
   SORTEAR 3 EVENTOS
======================== */
$sqlEventos = "SELECT * FROM eventos ORDER BY RAND() LIMIT 3";
$resEventos = $conexao->query($sqlEventos);

// pega 3 registros (ou menos, se não houver)
$row  = $resEventos->fetch_object();
$row2 = $resEventos->fetch_object();
$row3 = $resEventos->fetch_object();

/* ========================
   SORTEAR 3 RESTAURANTES
======================== */
$sqlRestaurantes = "SELECT * FROM eventos 
                    WHERE Categoria = 'Restaurante' 
                    ORDER BY RAND() LIMIT 3";
$resR = $conexao->query($sqlRestaurantes);

// pega até 3 restaurantes
$rowR  = $resR->fetch_object();
$rowR2 = $resR->fetch_object();
$rowR3 = $resR->fetch_object();
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="procurar.css">
    <title>Eventos</title>
</head>
<header>
    <a href="../inicio/home.php"><img class="Logo" src="../imagens/WgoIcon.png" alt="Logo"></a>
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
    <a href="procurar.php">Eventos</a>
    <a href="">Login</a>
</header>

<body>
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

    <br>
    <h2>Destaques</h2>

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

</body>

</html>
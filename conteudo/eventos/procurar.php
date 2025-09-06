<?php

require_once "../login/validador_acesso.php";
require_once "../login/config.php ";

require_once '../ConfigBd/porta.php';
 $recomendados = random_int(1, 10);
 $recomendados2 = random_int(1, 10);
 if ($recomendados2 == $recomendados) {
    $recomendados2 = random_int(1, 10);
 }
 $recomendados3 = random_int(1, 10);
 if ($recomendados3 == $recomendados || $recomendados3 == $recomendados2) {
    $recomendados3 = random_int(1, 10);
 }

  $evento1 = "SELECT * FROM eventos where Id_Evento = $recomendados";
  $evento2 = "SELECT * FROM eventos where Id_Evento = $recomendados2";
  $evento3 = "SELECT * FROM eventos where Id_Evento = $recomendados3";
   
            $res = $conexao->query($evento1);
            $qtd = $res->num_rows;
            $resEventos = $conexao->query($evento1);
            $qtdEventos = $resEventos->num_rows;
            $res2 = $conexao->query($evento2);
            $resEventos = $conexao->query($evento2);
            $res3 = $conexao->query($evento3);
            $resEventos = $conexao->query($evento3);
            


            $row = $res->fetch_object();
            $row2 = $res2->fetch_object();
            $row3 = $res3->fetch_object();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="procurar.css">
    <title>Document</title>
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
        
        <form action="evento_indi.php?id=<?php print $row->Id_Evento?>" method="GET">

                <div class='InfoDestaque'>
                    <h3><?php print $row->Nome_Evento ;?></h3>
                    <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png'/> <?php print $row->Endereco;?></p>
                    <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $row -> Id_Evento ?>">Ver mais</a>

                </div>
            </form>
        
        </Div>
       <Div class="CardDestaque">
        
        <img class='ImgDestaque' src=' <?php print $row2->Img1 ?>' alt=''>
        
        <form action="evento_indi.php?id=<?php print $row2->Id_Evento?>" method="GET">

                <div class='InfoDestaque'>
                    <h3><?php print $row2->Nome_Evento ;?></h3>
                    <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png'/> <?php print $row2->Endereco;?></p>
                    <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $row2 -> Id_Evento ?>">Ver mais</a>

                </div>
            </form>
        
        </Div>
       <Div class="CardDestaque">
        
        <img class='ImgDestaque' src=' <?php print $row3->Img1 ?>' alt=''>
        
        <form action="evento_indi.php?id=<?php print $row3->Id_Evento?>" method="GET">

                <div class='InfoDestaque'>
                    <h3><?php print $row3->Nome_Evento ;?></h3>
                    <p><img class='IconDestaque' src='https://cdn-icons-png.flaticon.com/128/149/149060.png'/> <?php print $row3->Endereco;?></p>
                    <a class="BtnSaibaMais" href="evento_indi.php?id=<?php print $row3 -> Id_Evento ?>">Ver mais</a>

                </div>
            </form>
        
        </Div>

</body>
</html>
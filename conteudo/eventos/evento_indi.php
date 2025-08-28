<?php
require_once "../ConfigBd/porta.php";
$evento = $_GET["id"];
  $sql = "SELECT * FROM eventos where Id_Evento = $evento";
   
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
    <title>Document</title>
    <link rel="stylesheet" href="evento_indi.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
$(document).ready(function () {
    // Miniaturas
    $('.MiniImg').click(function () {
        var src = $(this).attr('src');
        $('img.ImgEvento').fadeOut(200, function () {
            $(this).attr('src', src).fadeIn(200);
        });
    });

    // Carrosel com botões e fade
    let $imgs = $('.Carrosel .ImgRecomendados');
    let idx = 0;
    $imgs.hide().removeClass('active').eq(idx).show().addClass('active');

    $('.carrosel-next').click(function () {
        $imgs.eq(idx).fadeOut(300).removeClass('active');
        idx = (idx + 1) % $imgs.length;
        $imgs.eq(idx).fadeIn(300).addClass('active');
    });

    $('.carrosel-prev').click(function () {
        $imgs.eq(idx).fadeOut(300).removeClass('active');
        idx = (idx - 1 + $imgs.length) % $imgs.length;
        $imgs.eq(idx).fadeIn(300).addClass('active');
    });
});

    </script>

</head>

<body>
    <header>
       <img src="../imagens/WgoIcon2.png" class="ImgLogo" alt="">
        <form class="form">
            <button>
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                    aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
            </button>
            <input class="input" placeholder="Search" required="" type="text">
            <button class="reset" type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </form>
        <p>Home</p>
    </header>
    <main>
        <div class="div-Eventos">
            <div class="Eventos">
                  <?php
                    print "<h1 class='TituloEvento'>" . $row->Nome_Evento . "</h1>";
                    ?>
                <div class="Imagens">
                    <?php
                    print "<img class='ImgEvento' src='" . $row->Img1 . "' alt=''>";
                    ?>
                    <div class="Galeria">
                        <?php
                        print "<img class='MiniImg' src='" . $row->Img1 . "' alt=''>";
                        print "<img class='MiniImg' src='" . $row->Img2 . "' alt=''>";
                        print "<img class='MiniImg' src='" . $row->Img3 . "' alt=''>";
                        print "<img class='MiniImg' src='" . $row->Img4 . "' alt=''>";
                            ?>
                    </div>
                    <div class="Categoria">
                        <?php
                        print "<p class='CategoriaEvento'>" . $row->Categoria . "</p>";
                        ?>
                        <div class="AvaliacaoEvento">
                            <img class="ImgAvaliacao" src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png" alt=""><p class="Avaliacao">4.8</p><p class="QntdAvaliacao">(20 avaliações)
                        </div>
                    </div>
                    <div class="expecificacoes">
                        <?php
                        print "<p class='LocalEvento'><img class='ImgEspecificacoes' src='https://cdn-icons-png.flaticon.com/128/149/149060.png' alt=''>" . $row->Endereco . "</p>";
                        ?>
                        <?php
                        print "<p class='Tipo'><img class='ImgEspecificacoes' src='https://cdn-icons-png.flaticon.com/128/11735/11735507.png' alt=''>" . $row->Tipo . "</p>";
                        ?>
                        <?php
                        print "<p class='Horarip'><img class='ImgEspecificacoes' src='https://cdn-icons-png.flaticon.com/128/992/992531.png' alt=''>" . $row->Horario . "</p>";
                        ?>
                        
                    </div>
                    <?php
                    print "<p class='DescricaoEvento'>" . $row->Descricao . "</p>";
                    ?>
                </div>
                <button class="BtnPresenca">Marcar presença</button>
            </div>
        </div>
        <div class="Recomendados">
            <h2 class="TituloRecomendados">Restaurantes Recomendados</h2>
            <p>Bistrô Calixto</p>
                <div class="Carrosel">
                    <button class="carrosel-prev"><</button>
                        <img class="ImgRecomendados active" src="https://www.santos.sp.gov.br/static/files_www/files/portal_files/whatsapp_image_2022-02-07_at_15.34.53_1.jpeg" alt="">
                        <img class="ImgRecomendados" src="https://farm6.staticflickr.com/5578/14784005612_9eedc1be3e_o.jpg" alt="">
                        <img class="ImgRecomendados" src="https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/136494889_1800060073474886_4460064256080607769_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=ZM1zP168kEUQ7kNvwFwTZiY&_nc_oc=AdlICPLuXkhqQWhVeYV3njdBQLXLKZ4hDY-uyJJtTRySMUY3F0kQlQOaCr81JJrJu2MTincQqs0Tm9ElwpA_37Js&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=uFlvH8kK-Mso6MqZ8GSMvw&oh=00_AfX3NZIgo3biUKcP1JND98JHRyzDFbf-SZinsIXzem8kUg&oe=68D0BBEE" alt="">
                    <button class="carrosel-next">></button>
                </div>
        </div>
    </main>
    <footer>

    </footer>
</body>

</html>
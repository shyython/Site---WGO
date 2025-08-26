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
                <h2 class="TituloEvento">Restaurante D'boa Mexicano</h2>
                <div class="Imagens">

                    <img class="ImgEvento"
                        src="https://media-cdn.tripadvisor.com/media/photo-m/1280/19/ca/cb/0d/photo2jpg.jpg" alt="">
                    <div class="Galeria">
                        <img class="MiniImg"
                            src="https://scontent-gru1-2.cdninstagram.com/v/t39.30808-6/480503868_661643609777031_8311981747630123228_n.jpg?stp=c0.0.1638.2048a_dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE2Mzl4MjA0OC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QH3mItNUcSiB9fTEIDw2gv1dh-4SsOAi2vSKi2V6MjT6mHee7JUdU6rhJR1iAjZUOj0oCGgYkZL2qF1zEdxYuMN&_nc_ohc=u_kmOOYSfIcQ7kNvwGi9dl_&_nc_gid=awlipsbj44ZhbwIAJWdWQQ&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzU5MTA3OTczNDE4NDAwNjA1Ng%3D%3D.3-ccb7-5&oh=00_AfUzcF1LFPxYrf4UpyAqgT0hENV43AEhL86sk0b5xgrvsw&oe=68AECF39&_nc_sid=7a9f4b"
                            alt="">
                        <img class="MiniImg"
                            src="https://scontent-gru2-2.cdninstagram.com/v/t39.30808-6/525339285_766435515964506_3531436152382137862_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE2Mzh4MjA0OC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QFlvpaW4b5edGBYuoVNC6U-QHOY22bYYVWwDZqZ_4Rp73Vv2fQnAmqIiapwW8dW72RqJDXAGV6OHEt4KkfV27Zs&_nc_ohc=FAjfB7-nBT4Q7kNvwF9wRtT&_nc_gid=G4H_2tVv_VArnaVkar9KWQ&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzY5Mzk4MjE0Mjg0Njg1NTQ3OQ%3D%3D.3-ccb7-5&oh=00_AfV7ZR3xyIelXFzNYDPLeCAAXMrPJnYKN2nKu4DNLRFndQ&oe=68AEA2AB&_nc_sid=22de04alt=">
                        <img class="MiniImg"
                            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/19/ca/cb/0d/photo2jpg.jpg">
                        <img class="MiniImg"
                            src="https://tassioricardo.wordpress.com/wp-content/uploads/2012/11/20121103-205611.jpg">
                    </div>
                    <div class="Categoria">
                        <p class="CategoriaEvento">Restaurante</p>
                        <div class="AvaliacaoEvento">
                            <img class="ImgAvaliacao" src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png" alt=""><p class="Avaliacao">4.8</p><p class="QntdAvaliacao">(20 avaliações)
                        </div>
                    </div>
                    <div class="expecificacoes">
                        <p class="LocalEvento"><img class="ImgEspecificacoes"
                                src="https://cdn-icons-png.flaticon.com/128/149/149060.png" alt="">Av. Pedro Lessa, 2324
                            (Santos/SP)</p>
                        <p class="Tipo"> <img class="ImgEspecificacoes"
                                src="https://cdn-icons-png.flaticon.com/128/11735/11735507.png" alt="">Mexicano</p>
                        <p class="Horarip"><img class="ImgEspecificacoes"
                                src="https://cdn-icons-png.flaticon.com/128/992/992531.png" alt="">11:30 - 00:30</p>
                    </div>
                    <p class="DescricaoEvento">D'boa Mexicano é um restaurante de comida mexicana localizado na Avenida
                        Pedro Lessa, 2324, em Santos. Com um ambiente acolhedor e vibrante, o D'boa Mexicano oferece uma
                        experiência gastronômica autêntica e deliciosa, destacando-se pela variedade de pratos
                        tradicionais
                        mexicanos e latino-americanos No D'boa Mexicano, você encontrará desde tacos e burritos
                        recheados
                        com ingredientes frescos e saborosos, até ceviches e pokes que trazem um toque contemporâneo à
                        culinária latina. Além disso, o restaurante é conhecido por suas opções vegetarianas e pratos à
                        la
                        carte, garantindo que todos os clientes encontrem algo que agrada ao paladar.or</p>
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
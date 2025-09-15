 
// let index = 0;
// const imagens = document.querySelector('.imagens');
// const totalImagens = document.querySelectorAll('.imagens img').length;
 
// function mudarImagem() {
//     index = (index + 1) % totalImagens;
//     const deslocamento = -index * 600;
//     imagens.style.transform = `translateX(${deslocamento}px)`;
// }
 
// // mundando a imagem a cada 3 segundos
// setInterval(mudarImagem, 3000);
 
// /* noticacoes */
// var box  = document.getElementById('box');
// var down = false;
 
// function abrirNotifi(){
//  if (down) {
//    box.style.height  = '0px';
//    box.style.opacity = 0;
//    down = false;
//  }else {
//    box.style.height  = '510px';
//    box.style.opacity = 1;
//    down = true;
//  }
// }
 
// /* configurações */
// function abrirMenuConf() {
//     const configMenu = document.getElementById('configMenu');
//     if (configMenu.style.display === 'none' || configMenu.style.display === '') {
//         configMenu.style.display = 'block'; // Mostra o submenu
//     } else {
//         configMenu.style.display = 'none'; // Oculta o submenu
//     }
// }
 
// // Para ocultar o menu ao clicar fora dele (opcional)
// window.onclick = function(event) {
//     if (!event.target.matches('.itens')) {
//         const configMenu = document.getElementById('configMenu');
//         if (configMenu.style.display === 'block') {
//             configMenu.style.display = 'none';
//         }
//     }
// }
 
// ABRIR/FECHAR NOTIFICAÇÕES
function abrirNotifi(event) {
    const box = document.getElementById('box');
    box.classList.toggle('active');
}
 
// ABRIR/FECHAR MENU DE CONFIGURAÇÃO
function abrirMenuConf(event) {
    const configMenu = document.getElementById('configMenu');
    configMenu.classList.toggle('active');
}
 
// FECHAR NOTIFICAÇÃO E MENU AO CLICAR FORA
document.addEventListener('click', function (e) {
    const box = document.getElementById('box');
    const btnNot = document.querySelector('.btnNot');
    const configMenu = document.getElementById('configMenu');
    const configWrapper = document.querySelector('.config');
 
    // Fechar notificações
    if (!box.contains(e.target) && !btnNot.contains(e.target)) {
        box.classList.remove('active');
    }
 
    // Fechar menu de configurações
    if (!configWrapper.contains(e.target)) {
        configMenu.classList.remove('active');
    }
});
 
// MUDAR COR DO HEADER AO ROLAR A PÁGINA
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
    }
});
 
 
// const eventosPorCidade = {
//   "sao-paulo": [
//     { imagem: "https://s2-gshow.glbimg.com/8L8Ht7bNMaXASHSIYhy-eknpj9Y=/0x0:2816x1893/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/h/f/OIfFavScaorF3OA8Om0Q/the-town-mapa-2025.png", legenda: "The Town 2025" },
//     { imagem: "https://s2-g1.glbimg.com/CSO7TPAAze8wO0edsG7sdjjK4XI=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/v/0/ngYRL1QAGAzt0F5O0hvA/gerais-lolla-132a0274-fabio-tito-g1.jpg", legenda: "Lollapalooza" },
//     { imagem: "https://cdn.limbersoftware.com.br/img/bilhetes/9692/g-quyb90ABgz.webp", legenda: "Turnê Intemporal – Claudia Leitte – 27/09" },
//     { imagem: "https://static.wixstatic.com/media/96f097_fcbe4640b1d240a1998556eed0817184~mv2.jpg/v1/fill/w_980,h_1038,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96f097_fcbe4640b1d240a1998556eed0817184~mv2.jpg", legenda: "Wicked – O Musical" },
//     { imagem: "https://cdn2.totalacesso.com/events/6666/coala_destaque_740x475_v2-1_435d9595-42f9-4458-b771-00ca3305f4da.webp", legenda: "Coala Festival – 5 a 7/09" },
//     { imagem: "https://scontent.fssz1-1.fna.fbcdn.net/v/t39.30808-6/530296926_1703786537234632_3212300847532401457_n.jpg?stp=dst-jpg_p417x417_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=egToyxx6p14Q7kNvwGlL8v4&_nc_oc=AdkT1km8BNP7tAF2Q1u6nSSr4UsHBknxD7jaacBoeyi9jCydXxZUn3ZjSxpHL1XU9GI&_nc_zt=23&_nc_ht=scontent.fssz1-1.fna&_nc_gid=rfmWbUix5NCLQjelktkTNw&oh=00_Afb0yt3rfnAdoPpYMFW-jI_CoELErnSeBaei1pURONdsHA&oe=68BE211B", legenda: "Setembro Negro Festival – 5 a 7/09" },
//     { imagem: "https://placehold.co/600x350?text=Orgulho+Nerd", legenda: "Orgulho Nerd SP – 13 e 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Shows Candlelight – setembro" },
//     { imagem: "https://placehold.co/600x350?text=MAB+Expo", legenda: "Exposição Andy Warhol – até outubro" },
//     { imagem: "https://placehold.co/600x350?text=Comic+Con", legenda: "Comic Con Experience (CCXP)" }
//   ],
//   "rio-janeiro": [
//     { imagem: "https://placehold.co/600x350?text=Beetlejuice", legenda: "Beetlejuice – O Musical" },
//     { imagem: "https://placehold.co/600x350?text=Jacob+Collier", legenda: "Jacob Collier – Vivo Rio" },
//     { imagem: "https://placehold.co/600x350?text=Kamasi+Washington", legenda: "Kamasi Washington – Circo Voador" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Candlelight: Coldplay vs Ed Sheeran – 04/09" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Candlelight: Tributo Bee Gees – 04/09" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Candlelight: Tributo The Weeknd & Vivaldi – 12/09" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Candlelight: Coldplay x Imagine Dragons – 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Sleeping+Beauty", legenda: "Ballet Sleeping Beauty – 18/09" },
//     { imagem: "https://placehold.co/600x350?text=Mondial+Bi%C3%A8re", legenda: "Mondial De La Bière – 11 a 14/09" },
//     { imagem: "https://placehold.co/600x350?text=ArtRio", legenda: "ArtRio – 12 a 15/09" }
//   ],
//   "santos": [
//     { imagem: "https://placehold.co/600x350?text=Fernandinho", legenda: "Show Fernandinho – 04/09" },
//     { imagem: "https://placehold.co/600x350?text=Art+Mundi", legenda: "Art Mundi – Feira Mundial de Artesanato – 5 a 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Gran+Bazar", legenda: "Gran Bazar – Especial 7 anos – 13 e 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Vanessa+da+Mata", legenda: "Vanessa da Mata – 26/09" },
//     { imagem: "https://placehold.co/600x350?text=Santos+Power+Up", legenda: "Santos Power Up – 13/09" },
//     { imagem: "https://placehold.co/600x350?text=TGGS", legenda: "TGGS – O Show – 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Divaldo+Franco", legenda: "Divaldo Franco – Uma Missão de Amor – 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Night+Run", legenda: "Santos Night Run – 27/09" },
//     { imagem: "https://placehold.co/600x350?text=Ghibli+Fest", legenda: "Ghibli Fest – 19 e 20/09" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Candlelight Tributo Coldplay – 21/09" }
//   ],
//   "belo-horizonte": [
//     { imagem: "https://placehold.co/600x350?text=Alcione", legenda: "Show Alcione – 26/09" },
//     { imagem: "https://placehold.co/600x350?text=Vitor+Kley", legenda: "Show Vitor Kley – 27/09" },
//     { imagem: "https://placehold.co/600x350?text=Vanessa+da+Mata", legenda: "Vanessa da Mata – 19/09" },
//     { imagem: "https://placehold.co/600x350?text=Lagum", legenda: "Lagum – 20/09" },
//     { imagem: "https://placehold.co/600x350?text=Exposicao+MAP", legenda: "Exposição MAP Itinerante – 3 a 25/09" },
//     { imagem: "https://placehold.co/600x350?text=S%C3%B3+Track+Boa", legenda: "Só Track Boa Festival – 12 a 13/09" },
//     { imagem: "https://placehold.co/600x350?text=Ana+Canas", legenda: "Show Ana Cañas – 13/09" },
//     { imagem: "https://placehold.co/600x350?text=Leader+Shift", legenda: "Leader Shift 2025 – 02/09" },
//     { imagem: "https://placehold.co/600x350?text=SIM", legenda: "Semana Industrial Mineira – 9 a 12/09" },
//     { imagem: "https://placehold.co/600x350?text=Congresso+Harmonizacao", legenda: "Congresso Científico Harmonização – 13 a 14/09" }
//   ],
//   "curitiba": [
//     { imagem: "https://placehold.co/600x350?text=Kamasi+Washington", legenda: "Kamasi Washington – 03/09" },
//     { imagem: "https://placehold.co/600x350?text=Alceu+Valenca", legenda: "Alceu Valença – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=Epica", legenda: "Epica & Fleshgod Apocalypse – 07/09" },
//     { imagem: "https://placehold.co/600x350?text=Hello+Adele", legenda: "Tributo Hello Adele – 12/09" },
//     { imagem: "https://placehold.co/600x350?text=Green+Day", legenda: "Green Day – 12/09" },
//     { imagem: "https://placehold.co/600x350?text=Teto", legenda: "TETO – 13/09" },
//     { imagem: "https://placehold.co/600x350?text=Bienal+Livro", legenda: "Bienal Internacional do Livro do Paraná – 25/09" },
//     { imagem: "https://placehold.co/600x350?text=Orquestra", legenda: "Concerto Orquestra Sinfônica – 21/09" },
//     { imagem: "https://placehold.co/600x350?text=Museu+Oscar+Niemeyer", legenda: "Concerto gratuito Museu Oscar Niemeyer – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=StandUp", legenda: "Stand Up Comedy Festival Curitiba – setembro" }
//   ],
//   "porto-alegre": [
//     { imagem: "https://placehold.co/600x350?text=Hate+Moss", legenda: "Hate Moss – 04/09" },
//     { imagem: "https://placehold.co/600x350?text=Malstrom", legenda: "Malstrom – 05/09" },
//     { imagem: "https://placehold.co/600x350?text=Gilberto+Gil", legenda: "Gilberto Gil – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=Epica", legenda: "Epica & Fleshgod Apocalypse – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=Candlelight", legenda: "Concertos Candlelight – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Anavitoria", legenda: "Anavitória – Turnê das Esquinas – setembro" },
//     { imagem: "https://placehold.co/600x350?text=No+Te+Va+Gustar", legenda: "No Te Va Gustar – Tour 30 Anos – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Zimbra", legenda: "Zimbra – Turnê Tudo Se Refaz – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Leonel+Gomez", legenda: "Leonel Gómez – Show acústico – setembro" },
//     { imagem: "https://placehold.co/600x350?text=StandUp+Guri", legenda: "Stand-Up do Guri – 02/09" }
//   ],
//   "recife": [
//     { imagem: "https://placehold.co/600x350?text=Rock+Rec", legenda: "Rock Rec Festival – 13/09" },
//     { imagem: "https://placehold.co/600x350?text=Filipe+Ret", legenda: "Filipe Ret – 13/09" },
//     { imagem: "https://placehold.co/600x350?text=Esbornia", legenda: "Esbórnia Recife – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=Terapya", legenda: "Terapya (Henry Freitas) – 13/09" },
//     { imagem: "https://placehold.co/600x350?text=Vaquejada", legenda: "Vaquejada de Surubim – 19/09" },
//     { imagem: "https://placehold.co/600x350?text=Fabio+Jr", legenda: "Fábio Jr. – 19/09" },
//     { imagem: "https://placehold.co/600x350?text=Ana+Canas", legenda: "Projeto Seis e Meia – Ana Cañas – 05/09" },
//     { imagem: "https://placehold.co/600x350?text=Samba+Recife", legenda: "Samba Recife – 27 e 28/09" },
//     { imagem: "https://placehold.co/600x350?text=Festival+Cultura", legenda: "Festival Cultura Popular – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Feira+Artesanato", legenda: "Feira Internacional de Artesanato – setembro" }
//   ],
//   "brasilia": [
//     { imagem: "https://placehold.co/600x350?text=Festival+Vibrar", legenda: "Festival Vibrar – 4 a 7/09" },
//     { imagem: "https://placehold.co/600x350?text=Corrida+Bob+Esponja", legenda: "Corrida Bob Esponja – 21/09" },
//     { imagem: "https://placehold.co/600x350?text=Brazilian+Fest", legenda: "Brazilian Fest – 25 a 28/09" },
//     { imagem: "https://placehold.co/600x350?text=Jorge+Mateus", legenda: "Jorge & Mateus – 14/09" },
//     { imagem: "https://placehold.co/600x350?text=Katy+Perry", legenda: "Katy Perry – 19/09" },
//     { imagem: "https://placehold.co/600x350?text=Roberto+Carlos", legenda: "Roberto Carlos – 27/09" },
//     { imagem: "https://placehold.co/600x350?text=Expoabra", legenda: "EXPOABRA Brasília – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Roupa+Nova", legenda: "Roupa Nova Tour – 03/10" },
//     { imagem: "https://placehold.co/600x350?text=Me+Leva+Festival", legenda: "Me Leva Festival – 04/10" },
//     { imagem: "https://placehold.co/600x350?text=The+Wailers", legenda: "The Wailers – Voa Festival – outubro" }
//   ],
//   "florianopolis": [
//     { imagem: "https://placehold.co/600x350?text=Mac+Julia", legenda: "Mac Julia – 05/09" },
//     { imagem: "https://placehold.co/600x350?text=Alpha+Six", legenda: "Alpha Six + Mechanix + Metallica SC – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=Dandara+Manoela", legenda: "Dandara Manoela – 06/09" },
//     { imagem: "https://placehold.co/600x350?text=Hate+Moss", legenda: "Hate Moss – 07/09" },
//     { imagem: "https://placehold.co/600x350?text=Daisy+Jones", legenda: "Imersão Musical Daisy Jones & The Six – 26/09" },
//     { imagem: "https://placehold.co/600x350?text=Inevitavel", legenda: "Inevitável A Festa – 20/09" },
//     { imagem: "https://placehold.co/600x350?text=FenaOstra", legenda: "FenaOstra – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Startup+Summit", legenda: "Startup Summit – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Folianopolis", legenda: "Folianópolis – novembro" },
//     { imagem: "https://placehold.co/600x350?text=Parada+LGBT", legenda: "Parada LGBTI+ – outubro" }
//   ],
//   "campinas": [
//     { imagem: "https://placehold.co/600x350?text=Expo+Dom+Pedro", legenda: "Expo Dom Pedro – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Campinas+Stock+Festival", legenda: "Campinas Stock Festival – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Feira+Livro", legenda: "Feira do Livro Campinas – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Show+Anavitoria", legenda: "Anavitória – Turnê Campinas – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Orquestra+Campinas", legenda: "Concerto Orquestra Sinfônica – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Startup+Campinas", legenda: "Startup Campinas Summit – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Festival+Comida+de+Buteco", legenda: "Festival Comida de Buteco – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Teatro+Municipal", legenda: "Peça teatral – Teatro Municipal – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Feira+Artesanato", legenda: "Feira Internacional de Artesanato – setembro" },
//     { imagem: "https://placehold.co/600x350?text=Show+Zeca+Baleiro", legenda: "Show Zeca Baleiro – setembro" }
//   ]
// };
 
 
 
// const cidadeSelect = document.getElementById("cidade");
// const slide = document.getElementById("slide");
// const legenda = document.getElementById("legenda");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
 
// let eventosAtuais = eventosPorCidade["sao-paulo"];
// let indiceAtual = 0;
// let intervalo;
 
// Atualiza a imagem e a legenda
// function atualizarSlide() {
//   slide.style.opacity = 0; // efeito de fade-out
//   setTimeout(() => {
//     slide.src = eventosAtuais[indiceAtual].imagem;
//     legenda.textContent = eventosAtuais[indiceAtual].legenda;
//     slide.style.opacity = 1; // efeito de fade-in
//   }, 300);
// }
 
// Avança para o próximo slide
// function proximoSlide() {
//   indiceAtual = (indiceAtual + 1) % eventosAtuais.length;
//   atualizarSlide();
// }
 
// Volta para o slide anterior
// function slideAnterior() {
//   indiceAtual = (indiceAtual - 1 + eventosAtuais.length) % eventosAtuais.length;
//   atualizarSlide();
// }
 
// Troca automática a cada 5 segundos
// function iniciarTrocaAutomatica() {
//   clearInterval(intervalo);
//   intervalo = setInterval(proximoSlide, 5000);
// }
 
// Quando troca a cidade, reinicia o carrossel
// cidadeSelect.addEventListener("change", () => {
//   if (!cidadeSelect.value) return; // evita erro se não selecionar nada
//   eventosAtuais = eventosPorCidade[cidadeSelect.value];
//   indiceAtual = 0;
//   atualizarSlide();
//   iniciarTrocaAutomatica();
// });
 
// Botões de navegação
// nextBtn.addEventListener("click", () => {
//   proximoSlide();
//   iniciarTrocaAutomatica();
// });
 
// prevBtn.addEventListener("click", () => {
//   slideAnterior();
//   iniciarTrocaAutomatica();
// });
 
// Inicialização
// atualizarSlide();
// iniciarTrocaAutomatica();
const slidesContainer = document.querySelector(".slides");
const indicadoresContainer = document.querySelector(".indicadores");

let indiceAtual = 0;
let intervalo;
 
// Lista fixa de slides
const eventos = [
  { img: "https://www.neoenergia.com/documents/107588/1663781/PALCO+MUNDO.jpg/c30ee153-7fee-d7f3-72b4-2999c248a304?version=1.0&t=1724864091054", titulo: "Rock in Rio", descricao: "Viva intensamente cada acorde, cada grito e cada show no festival que faz o mundo olhar para o Brasil!" },
  { img: "https://www.showmetech.com.br/wp-content/uploads//2025/03/destacada-lollapalooza-brasil-2025-showmetech-1920x1024.png", titulo: "Lollapalooza", descricao: "Seja parte da energia vibrante e da mistura de estilos que fazem do Lollapalooza uma experiência única!" },
  { img: "https://www.midiorama.com/wp-content/uploads/2018/07/villa-mix-2018-nick-jonas6.jpg", titulo: "VillaMix", descricao: "Do sertanejo ao pop, o VillaMix é a mistura perfeita para quem ama música e diversão sem limites!" },
  { img: "https://cultura.am.gov.br/wp-content/uploads/2024/06/choso_dito-2.png", titulo: "Festival de Parintins", descricao: "Sinta a emoção do duelo entre Garantido e Caprichoso no Festival de Parintins, a maior celebração cultural da Amazônia!" }
];
 
// Atualiza o slide exibido
function atualizarSlide() {
  slidesContainer.innerHTML = "";
  indicadoresContainer.innerHTML = "";
 
  const evento = eventos[indiceAtual];
 
  const slide = document.createElement("div");
  slide.classList.add("slide", "ativo");
  slide.innerHTML = `
    <img src="${evento.img}" alt="${evento.titulo}">
    <div class="conteudo">
      <h2>${evento.titulo}</h2>
      <p>${evento.descricao}</p>
    </div>
  `;
  slidesContainer.appendChild(slide);
 
  eventos.forEach((_, i) => {
    const indicador = document.createElement("div");
    indicador.classList.add("indicador");
    if (i === indiceAtual) indicador.classList.add("ativo");
    indicador.addEventListener("click", () => {
      indiceAtual = i;
      atualizarSlide();
      iniciarTrocaAutomatica();
    });
    indicadoresContainer.appendChild(indicador);
  });
}
 
// Próximo slide
function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % eventos.length;
  atualizarSlide();
}
 
// Auto-play
function iniciarTrocaAutomatica() {
  clearInterval(intervalo);
  intervalo = setInterval(proximoSlide, 5000);
}
 
// Inicialização
atualizarSlide();
iniciarTrocaAutomatica();

// Janela separada
const categoria2 = document.querySelectorAll('.categoria2');
const janela = document.getElementById('janela');
const janelaTitle = document.getElementById('janelaTitle');
const janelaContent = document.getElementById('janelaContent');
const janelaImg = document.getElementById('janelaImg');
const janelaGaleria = document.querySelector('.janela-galeria');
const descricaoTitulo = document.querySelector('.titulo-destaque');
const descricaoParagrafo = document.querySelector('.descricao');
const btnFechar = document.getElementById('btnFechar');

const slides = document.querySelectorAll('.image');
const btnEsquerda = document.getElementById('esquerda-button');
const btnDireita = document.getElementById('direita-button');

let currentIndex = 0;
let currentSlides = []; // imagens do carrossel dinâmico
let currentDescricoes = []; // textos do carrossel dinâmico

// --- Dados de cada categoria ---
const carrosseis = {
  "Baladas": {
    imagens: [
      "../imagens/home/baladaHome.webp",
      "../imagens/home/balada2.jpg",
      "../imagens/home/balada3.jpg"
    ],
    descricoes: [
      { titulo: "Noite Inesquecível", descricao: "As melhores festas para você dançar até amanhecer." },
      { titulo: "DJ's Internacionais", descricao: "Grandes nomes da música eletrônica direto na sua cidade." },
      { titulo: "Ambiente Vibrante", descricao: "Som, luz e energia que você nunca vai esquecer." }
    ]
  },
  "Esportes": {
    imagens: [
      "../imagens/home/teleferico.jpg",
      "../imagens/home/aTribuna.jpg",
      "../imagens/home/esporte3.jpg"
    ],
    descricoes: [
      { titulo: "Adrenalina Pura", descricao: "Participe de eventos esportivos e viva a emoção de competir." },
      { titulo: "Aventura ao Ar Livre", descricao: "Atividades radicais e esportes para todos os gostos." },
      { titulo: "Esportes em Grupo", descricao: "Futebol, vôlei, basquete e muito mais para você curtir com os amigos." }
    ]
  },
  "Restaurantes": {
    imagens: [
      "../imagens/home/restaurantesHome.jpg",
      "../imagens/home/restaurante2.jpg",
      "../imagens/home/restaurante3.jpg"
    ],
    descricoes: [
      { titulo: "Tradição e Sabor", descricao: "Culinária regional feita com amor e ingredientes frescos." },
      { titulo: "Ambiente Aconchegante", descricao: "Um lugar perfeito para jantar com amigos e família." },
      { titulo: "Sabores Únicos", descricao: "Experimente pratos exclusivos preparados por chefs renomados." }
    ]
  },
   "Cultura": {
    imagens: [
      "../imagens/home/restaurantesHome.jpg",
      "../imagens/home/restaurante2.jpg",
      "../imagens/home/restaurante3.jpg"
    ],
    descricoes: [
      { titulo: "Tradição e Sabor", descricao: "Culinária regional feita com amor e ingredientes frescos." },
      { titulo: "Ambiente Aconchegante", descricao: "Um lugar perfeito para jantar com amigos e família." },
      { titulo: "Sabores Únicos", descricao: "Experimente pratos exclusivos preparados por chefs renomados." }
    ]
  },
   "Eventos Comunitários": {
    imagens: [
      "../imagens/home/restaurantesHome.jpg",
      "../imagens/home/restaurante2.jpg",
      "../imagens/home/restaurante3.jpg"
    ],
    descricoes: [
      { titulo: "Tradição e Sabor", descricao: "Culinária regional feita com amor e ingredientes frescos." },
      { titulo: "Ambiente Aconchegante", descricao: "Um lugar perfeito para jantar com amigos e família." },
      { titulo: "Sabores Únicos", descricao: "Experimente pratos exclusivos preparados por chefs renomados." }
    ]
  },
     "Pontos Turísticos e Históricos": {
    imagens: [
      "../imagens/home/restaurantesHome.jpg",
      "../imagens/home/restaurante2.jpg",
      "../imagens/home/restaurante3.jpg"
    ],
    descricoes: [
      { titulo: "Tradição e Sabor", descricao: "Culinária regional feita com amor e ingredientes frescos." },
      { titulo: "Ambiente Aconchegante", descricao: "Um lugar perfeito para jantar com amigos e família." },
      { titulo: "Sabores Únicos", descricao: "Experimente pratos exclusivos preparados por chefs renomados." }
    ]
  },
     "Praias e Ar Livre": {
    imagens: [
      "../imagens/home/restaurantesHome.jpg",
      "../imagens/home/restaurante2.jpg",
      "../imagens/home/restaurante3.jpg"
    ],
    descricoes: [
      { titulo: "Tradição e Sabor", descricao: "Culinária regional feita com amor e ingredientes frescos." },
      { titulo: "Ambiente Aconchegante", descricao: "Um lugar perfeito para jantar com amigos e família." },
      { titulo: "Sabores Únicos", descricao: "Experimente pratos exclusivos preparados por chefs renomados." }
    ]
  },
  // 👉 aqui você adiciona Cultura, Eventos Comunitários, Pontos Turísticos, etc
};

// --- Atualiza carrossel no modal ---
function updateCarousel() {
  const janelaImgs = document.querySelector('.janela-img');
  janelaImgs.innerHTML = ""; // limpa imagens antigas

  currentSlides.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("image");
    if (index === currentIndex) img.classList.add("on");
    janelaImgs.appendChild(img);
  });

  descricaoTitulo.textContent = currentDescricoes[currentIndex].titulo;
  descricaoParagrafo.textContent = currentDescricoes[currentIndex].descricao;
}

btnDireita.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentSlides.length;
  updateCarousel();
});

btnEsquerda.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentSlides.length) % currentSlides.length;
  updateCarousel();
});

// --- Clique em categoria ---
categoria2.forEach(categoria => {
  categoria.addEventListener('click', () => {
    const title = categoria.getAttribute('janela-title');
    const content = categoria.getAttribute('janela-descri');

    janelaTitle.textContent = title;
    janelaContent.textContent = content;

    if (carrosseis[title]) {
      currentSlides = carrosseis[title].imagens;
      currentDescricoes = carrosseis[title].descricoes;
      currentIndex = 0;

      janelaImg.style.display = "none"; // esconde imagem única
      janelaGaleria.style.display = "block"; // mostra carrossel
      updateCarousel();
    } else {
      janelaImg.src = categoria.getAttribute('janela-img');
      janelaImg.style.display = "block";
      janelaGaleria.style.display = "none";
    }

    janela.classList.add('abrir');
    janela.style.display = "block";
    janela.scrollIntoView({ behavior: 'smooth' });
  });
});

btnFechar.addEventListener('click', () => {
  janela.classList.remove('abrir');
  janela.style.display = "none";
});


 
 
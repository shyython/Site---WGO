
let index = 0; 
const imagens = document.querySelector('.imagens');
const totalImagens = document.querySelectorAll('.imagens img').length;

function mudarImagem() {
    index = (index + 1) % totalImagens; 
    const deslocamento = -index * 600; 
    imagens.style.transform = `translateX(${deslocamento}px)`;
}

// mundando a imagem a cada 3 segundos
setInterval(mudarImagem, 3000);

/* noticacoes */
var box  = document.getElementById('box');
var down = false;

function abrirNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}

/* configurações */
function abrirMenuConf() {
    const configMenu = document.getElementById('configMenu');
    if (configMenu.style.display === 'none' || configMenu.style.display === '') {
        configMenu.style.display = 'block'; // Mostra o submenu
    } else {
        configMenu.style.display = 'none'; // Oculta o submenu
    }
}

// Para ocultar o menu ao clicar fora dele (opcional)
window.onclick = function(event) {
    if (!event.target.matches('.itens')) {
        const configMenu = document.getElementById('configMenu');
        if (configMenu.style.display === 'block') {
            configMenu.style.display = 'none';
        }
    }
}
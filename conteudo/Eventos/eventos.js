<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
function abrirMenuConf() {
    const configMenu = document.getElementById('configMenu');
    if (configMenu.style.display === 'none' || configMenu.style.display === '') {
        configMenu.style.display = 'block'; // Mostra o submenu
    } else {
        configMenu.style.display = 'none'; // Oculta o submenu
    }
<<<<<<< Updated upstream
=======
}

// Para ocultar o menu ao clicar fora dele (opcional)
window.onclick = function(event) {
    if (!event.target.matches('.itens')) {
        const configMenu = document.getElementById('configMenu');
        if (configMenu.style.display === 'block') {
            configMenu.style.display = 'none';
        }
    }
>>>>>>> Stashed changes
}
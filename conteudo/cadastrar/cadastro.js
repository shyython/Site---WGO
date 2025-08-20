/* aba de onfigurações */
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
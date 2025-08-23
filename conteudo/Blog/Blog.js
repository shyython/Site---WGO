// ABRIR/FECHAR NOTIFICAÇÕES
function abrirNotifi() {
    const box = document.getElementById('box');
    box.classList.toggle('active');
}

// ABRIR/FECHAR MENU DE CONFIGURAÇÃO
function abrirMenuConf() {
    const configMenu = document.getElementById('configMenu');
    configMenu.style.display = (configMenu.style.display === 'block') ? 'none' : 'block';
}

// FECHAR NOTIFICAÇÃO E MENU AO CLICAR FORA
document.addEventListener('click', function(e) {
    const box = document.getElementById('box');
    const icon = document.querySelector('.icon');
    const configMenu = document.getElementById('configMenu');

    // Notificação
    if (!box.contains(e.target) && !icon.contains(e.target)) {
        box.classList.remove('active');
    }

    // Menu configuração
    if (!configMenu.contains(e.target) && !e.target.classList.contains('itens')) {
        configMenu.style.display = 'none';
    }
});
// Adicionar classe 'solid' ao rolar
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
    }
});
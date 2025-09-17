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


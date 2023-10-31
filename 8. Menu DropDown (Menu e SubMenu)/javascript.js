// JS PARA MOSTRAR OU OCULTAR MENU
const nava_area = document.getElementById('seccao-de-navegacao');
const secc_menu_logo = document.getElementById('seccao-menu-logo');
const secc_menu_aberto = document.getElementById('seccao-menu-aberto');

function mostrar_ocultar_menu(){
    if(nava_area.style.display = 'none'){
        nava_area.style.display = 'block';
        secc_menu_aberto.style.display = 'flex';
        secc_menu_logo.style.display = 'none';
    }    
}
function mostrar_ocultar(){
    if(nava_area.style.display = 'block'){
        nava_area.style.display = 'none';
        secc_menu_aberto.style.display = 'none';
        secc_menu_logo.style.display = 'block';
    }    
}



// JS PARA ALTERAR TEMA DAS PAGINAS ENTRE DARK E LIGHT
const btnTheme = document.getElementById('theme-mod');
const secc_logo = document.getElementById('seccao-de-logo');
const themeSystem = localStorage.getItem('themeSystem') || 'light'

btnTheme.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light';
    let newTheme = oldTheme == 'light' ? 'dark' : 'light'

    localStorage.setItem('themeSystem', newTheme)
    changeMod(newTheme)
})
function changeMod(theme) {
    const darkSvg = '<span class="material-symbols-outlined">dark_mode</span>'
    const lightSvg = '<span class="material-symbols-outlined">light_mode</span>'

    const logo_azul = '<span><img id="logoazul" src="imagens/logo-hca-azul.png" alt="HCA LOGO"></span>'
    const logo_branco = '<span><img id="logoazul" src="imagens/logo-hca-branco.png" alt="HCA LOGO"></span>'
    
    document.documentElement.setAttribute('data-theme', theme)
    if (theme == 'dark') {
        btnTheme.innerHTML = darkSvg;
        secc_logo.innerHTML = logo_branco;
    }
    else {
        btnTheme.innerHTML = lightSvg;
        secc_logo.innerHTML = logo_azul;
    }
}
changeMod(themeSystem)

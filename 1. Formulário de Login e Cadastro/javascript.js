//JS PARA LOGIM
// VOCÊ PODE ALTERAR O USUÁRIO E A SENHA NA LINHA NÚMERO 9,
// ACTUALMENTE O USUÁRIO É 'user' E A SENHA É '123', SEM AS ASPAS É CLARO.
function entrar() {
    const nomeusuario = document.getElementById('user_name').value;
    const senhausuario = document.getElementById('user_password').value;
    const notific_usi = document.getElementById('usi');
    const notific_ptc = document.getElementById('ptc');

    if (nomeusuario === 'user' && senhausuario === '123') {
        window.location = "tela-de-cadastro.html";
    }
    if (nomeusuario == '' || senhausuario == '') {
        if (notific_ptc.style.display = 'none') {
            notific_ptc.style.display = 'block'
        }
    }
    else {
        notific_usi.style.display = 'block'
    }
}

// JS PARA ALTERAR TEMA DAS PAGINAS ENTRE DARK E LIGHT
const btnTheme = document.getElementById('theme-mod');
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
    document.documentElement.setAttribute('data-theme', theme)
    if (theme == 'dark') {
        btnTheme.innerHTML = darkSvg;
    }
    else {
        btnTheme.innerHTML = lightSvg;
    }
}
changeMod(themeSystem)

//JS PARA MOSTRAR NOTIFICAÇÃO AO ENSERIR CÓDIGO
function mostrarnot() {
    const cardnotific = document.getElementById('card-notific');

    if (cardnotific.style.display = 'none') {
        cardnotific.style.display = 'flex'
    }
}

//JS PARA OCULTAR NOTIFICAÇÃO QUANDO CLICA EM 'OK'
function removenot() {
    const cardnotific = document.getElementById('card-notific');

    if (cardnotific.style.display = 'flex') {
        cardnotific.style.display = 'none'
    }
}
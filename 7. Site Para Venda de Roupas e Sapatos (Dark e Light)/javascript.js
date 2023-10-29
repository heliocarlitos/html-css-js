function abrir_fechar_menu() {
    var areaDeNavegacao = document.getElementById("area-de-navegacao");
    var mainContent = document.getElementById("main-content");

    if (areaDeNavegacao.style.display === "block") {
        areaDeNavegacao.style.display = "none";
        mainContent.classList.remove("blur-and-darken"); // Remove a classe para desfocar e escurecer
    } else {
        areaDeNavegacao.style.display = "block";
        mainContent.classList.add("blur-and-darken"); // Adiciona a classe para desfocar e escurecer
    }
}

//=================== JS PARA ALTERAR O TEMA LIGHT/DARK  =========================== 

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#trocarmod')

$checkbox.addEventListener('click', function(){
    $html.classList.toggle('dark-moode')
})

//=================== JS PARA COOKIES  =========================== 

var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}
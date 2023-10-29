const sscaoCookies = document.getElementById('sseccao-de-cookies');

function aceiteicookies(){
    localStorage.SalvarCookies = 'Cookies-Salvo'
    sscaoCookies.classList.remove('mostrar')
}
if(localStorage.SalvarCookies == 'Cookies-Salvo'){
    sscaoCookies.classList.remove('mostrar')
}
else{
    sscaoCookies.classList.add('mostrar')
}
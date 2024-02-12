const Cabecalho = document.getElementById('Cabecalho');
const CabecalhoMobile = document.getElementById('CabecalhoMobile');

function MostrarMenu(){
    Cabecalho.style.display = 'block'
    CabecalhoMobile.style.display = 'none'
}
function OcultarMenu(){
    Cabecalho.style.display = 'none'
    CabecalhoMobile.style.display = 'block'
}
// 
function fecharPlanoVencido () {
    document.getElementById('SeccaoDeUsoDePlano').style.display = 'none'
    document.getElementById('LinhaDoMenuDois').style.display = 'none'
}
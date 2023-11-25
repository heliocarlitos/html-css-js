function actualizarDados() {
    const tambImg = document.getElementById('tambImg');
    const imgPerfil = document.getElementById('imgPerfil')
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const titulo = document.getElementById('titulo');
    const tags = document.getElementById('tags');
    const universidade = document.getElementById('universidade');
    const distrito = document.getElementById('distrito');
    const provincia = document.getElementById('provincia');
    const pais = document.getElementById('pais');

    const tambImgDigitado = document.getElementById('tambImgDigitado').value;
    const imgPerfilDigitado = document.getElementById('imgPerfilDigitado').value;
    const nomeDigitado = document.getElementById('nomeDigitado').value;
    const sobrenomeDigitado = document.getElementById('sobrenomeDigitado').value;
    const tituloDigitado = document.getElementById('tituloDigitado').value;
    const tagsDigitado = document.getElementById('tagsDigitado').value;
    const universidadeDigitado = document.getElementById('universidadeDigitado').value;
    const distritoDigitado = document.getElementById('distritoDigitado').value;
    const provinciaDigitado = document.getElementById('provinciaDigitado').value;
    const paisDigitado = document.getElementById('paisDigitado').value;

    tambImg.src = tambImgDigitado;
    imgPerfil.src = imgPerfilDigitado;
    nome.innerHTML = nomeDigitado + ' ';
    sobrenome.innerHTML = sobrenomeDigitado;
    titulo.innerHTML = tituloDigitado;
    tags.innerHTML = tagsDigitado;
    universidade.innerHTML = universidadeDigitado;
    distrito.innerHTML = distritoDigitado;
    provincia.innerHTML = provinciaDigitado;
    pais.innerHTML = paisDigitado + ' ';

    ocultarEdInfo();
}


function mtip(){
    if (document.getElementById('pesquisar').style.display = 'none'){
        document.getElementById('pesquisar').style.display = 'block'
    }
}
function mostarEdInfo(){
    document.getElementById('fundodesfocado').style.display = 'flex'
}
function ocultarEdInfo(){
    document.getElementById('fundodesfocado').style.display = 'none'
}
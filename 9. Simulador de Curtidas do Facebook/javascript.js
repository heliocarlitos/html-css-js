function eu_gostei(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/gosto.png" alt="Like">';
}
function eu_amei(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/coracao.png" alt="Like">';
}
function eu_amei(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/coracao.png" alt="Like">';
}
function eu_ri(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/rindo.png" alt="Like">';
}
function eu_fiquei_surpreso(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/surpreso.png" alt="Like">';
}
function eu_fiquei_triste(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/triste.png" alt="Like">';
}
function eu_fiquei_nervoso(){
    document.getElementById('reacao').innerHTML = '<img class="interaccao-logo" src="emojis/nervoso.png" alt="Like">';
}

const emojises = document.getElementById('emojis');
function mostrar_emijis(){
    if(emojises.style.display = 'none'){
        emojises.style.display = 'flex'
    }
}
function fechar_emijis(){
    
    emojises.style.display = 'none'
}











const a_notificacao = document.getElementById('notificacao');

function mostrar_notificacao(){
    if(a_notificacao.style.display = 'none'){
        a_notificacao.style.display = 'flex'
    }
}
function fechar_notificacao(){
    if(a_notificacao.style.display = 'flex'){
        a_notificacao.style.display = 'none'
    }
}
function SegundosMinutos() {

    let SegundosDigitados = prompt('Digita os Minutos para converter em segundos')

    let resultado = SegundosDigitados * 60

    if (SegundosDigitados == ''){
        alert('Você não digitou nada!');
        SegundosMinutos()
    }
    if (SegundosDigitados == String){
        alert('Digite apenas números sem letras!')
        SegundosMinutos()
    }
    else{
       alert(SegundosDigitados + 'Min tem ' + resultado + ' segundos.')
    }

}

function HorasMinutos() {
        
    let HorasDigitadas = prompt('Digita as Horas para converter em Minutos.')

    let resultado = HorasDigitadas * 60

    if (HorasDigitadas == ''){
        alert('Você não digitou nada!');
        SegundosMinutos()
    }
    if (HorasDigitadas == String){
        alert('Digite apenas números sem letras!')
        SegundosMinutos()
    }
    else{
       alert(HorasDigitadas + 'h tem ' + resultado + ' minutos.')
    }

}

function DiasHoras() {
        
    let DiasDigitadas = prompt('Digita os Dias para converter em Horas.')

    let resultado = DiasDigitadas * 24

    if (DiasDigitadas == ''){
        alert('Você não digitou nada!');
        SegundosMinutos()
    }
    if (DiasDigitadas == String){
        alert('Digite apenas números sem letras!')
        SegundosMinutos()
    }
    else{
       alert(DiasDigitadas + ' dias tem ' + resultado + ' Horas.')
    }

}

function SemanasDias() {
        
    let SemanasDigitadas = prompt('Digita as Semanas para converter em Dias.')

    let resultado = SemanasDigitadas * 7

    if (SemanasDigitadas == ''){
        alert('Você não digitou nada!');
        SegundosMinutos()
    }
    if (SemanasDigitadas == String){
        alert('Digite apenas números sem letras!')
        SegundosMinutos()
    }
    else{
       alert(SemanasDigitadas + ' Semanas tem ' + resultado + ' Dias.')
    }

}

function MesesSemanas() {
        
    let MesesDigitadas = prompt('Digita os Meses para converter em Semanas.')

    let resultado = MesesDigitadas * 4

    if (MesesDigitadas == ''){
        alert('Você não digitou nada!');
        SegundosMinutos()
    }
    if (MesesDigitadas == String){
        alert('Digite apenas números sem letras!')
        SegundosMinutos()
    }
    else{
       alert(MesesDigitadas + ' Mes tem ' + resultado + ' Semanas.')
    }

}

function AnoMes() {
        
    let AnosDigitadas = prompt('Digita os Anos para converter em Meses.')

    let resultado = AnosDigitadas * 12

    if (AnosDigitadas == ''){
        alert('Você não digitou nada!');
        SegundosMinutos()
    }
    if (AnosDigitadas == String){
        alert('Digite apenas números sem letras!')
        SegundosMinutos()
    }
    else{
       alert(AnosDigitadas + ' anos tem ' + resultado + ' Meses.')
    }

}
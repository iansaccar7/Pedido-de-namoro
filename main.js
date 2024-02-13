const botaoPlayPause = document.getElementById('play-pause')
const botaoAvancar = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const audioCapitulo = document.getElementById('audio-capitulo')
const nomeCapitulo = document.getElementById('capitulo')



botaoPlayPause.addEventListener('click', tocarOuPausar)
botaoAvancar.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', voltarFaixa)


const numeroCapitulos = 10
let taTocando = 0
let capituloAtual = 1

function tocarFaixa() {
    audioCapitulo.play()
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}
function pausarFaixa() {
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}
function tocarOuPausar() {
    if(taTocando === 0 ){
        tocarFaixa()
        taTocando = 1
    } else{
        pausarFaixa()
        taTocando = 0
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'nomes ' + capituloAtual
}


function voltarFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = numeroCapitulos
    }else{
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = './pedido de namoro/musicas/' + capituloAtual + '.mp3'
    tocarFaixa()
    taTocando = 1
    trocarNomeFaixa()
}




function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1 
    } else{
         capituloAtual = capituloAtual + 1
    }
    
     audioCapitulo.src = './Hashtag Books (Do Zero)/aula 1 (do zero)/books/dom-casmurro/' + capituloAtual + '.mp3'
    tocarFaixa()
    taTocando = 1
    trocarNomeFaixa()

    
   
}



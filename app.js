
let texto = document.querySelector('textarea')
let foto = document.querySelector('.foto-menino')

/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/



function criptografarTexto(){
    let texto = document.querySelector('textarea').value;
    texto.toLocaleLowerCase();
    let result = texto.replaceAll("a", "ai").replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("u", "ufat")
    document.querySelector('#textocript').innerHTML = result;
    document.querySelector('textarea').value = result;
    limparTela()
}

function descriptografarTexto(){
    let texto_criptografado = document.querySelector('textarea').value;
    texto_criptografado.toLocaleLowerCase();
    let result_cript = texto_criptografado.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
    document.querySelector('#textocript').innerHTML = result_cript;
    document.querySelector('textarea').value = '';
    limparTela()
}

function limparTela() {
    document.querySelector('#textoscript_2').innerHTML = '';
    foto.style.display = 'none'
}

function mensagemErro(){
    alert('Permito apenas letras minusculas')
}
function textoCript(){
    let textCript = document.querySelector('.section-tela-branco-texto').value
    textCript.style.top = '1000px'
}
    
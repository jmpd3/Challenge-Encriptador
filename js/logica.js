var usado = false;
window.onload = function() {
    document.getElementById('texto').value = '';
    document.getElementById('textoEncriptado').value = '';
};

function encriptar(){
    var texto = document.getElementById('texto').value;
    if(comprobarValidez(texto)){
    var textoEncriptado = encriptarTexto(texto);
    document.getElementById('textoEncriptado').value = textoEncriptado;
    if (usado==false)
    {
        usado=true;
        alert('1, true');
        document.querySelector('.output-area').style.display = 'block';
        document.querySelector('.placeholder').style.display='none';
    }
        document.getElementById('aviso').style.color = '#777777';
    }
    else document.getElementById('aviso').style.color = 'red';
    
    
}

function desencriptar(){
    var textoEncriptado = document.getElementById('texto').value;
    var texto = desencriptarTexto(textoEncriptado);
    document.getElementById('textoEncriptado').value = texto;
    
}
function copiar(){
    var texto = document.getElementById('textoEncriptado').value;
    navigator.clipboard.writeText(texto);
}
function comprobarValidez(t)
{
    if (t==t.toLowerCase())
    {
        const regex = /^[a-zA-Z0-9\s]+$/;
        alert(`2, ${!regex.test(t)}`)
        return regex.test(t);
    }
    else return false;
}
function encriptarTexto(valor)
{
valor = valor.replace(/e/mg, "enter");
valor = valor.replace(/i/mg, "imes");
valor = valor.replace(/a/mg, "ai");
valor = valor.replace(/o/mg, "ober");
valor = valor.replace(/u/mg, "ufat");

return valor;
}

function desencriptarTexto(valor)
{

valor = valor.replace(/enter/mg, "e");
valor = valor.replace(/imes/mg, "i");
valor = valor.replace(/ai/mg, "a");
valor = valor.replace(/ober/mg, "o");
valor = valor.replace(/ufat/mg, "u");
return valor;
}
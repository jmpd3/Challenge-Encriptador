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

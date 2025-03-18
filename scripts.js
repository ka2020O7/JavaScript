
function verificarPar (numero) {
if (numero % 2 === 0 )  {
    console .log("o numero é par")  
 } else { 
    console .log ("numero é impar")
}

}

verificarPar(2)

/////////////////////////////////////

function calcular(numero1,numero2) {

    const soma = numero1 + numero2;
    const subtracao = numero1 -numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 % numero2;

    console .log (soma)
    console .log (subtracao)
    console .log (multiplicacao)
    console .log (divisao)
}

console .log (calcular(10,4))

//////////////////////////////////////
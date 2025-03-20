
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

///////////////////////////////////

let contador = 10;
while (contador > 0) {
    console.log(contador);
    contador--;
}

///////////////////////////////////


let original = "JavaScript";
let reversed = original.split("").reverse().join("");
console.log(reversed);


///////////////////////////////////

let str = "ContadorDeLetras";
let n = str.length;
console.log(n);


//////////////////////////////////


let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

console .log (meuCarro)


//////////////////////////////////



function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(mensagem,nome);
}

mensagemPersonalizada("kauan");
mensagemPersonalizada("kauan", "Bom dia!");


//////////////////////////////////


function media(n1, n2, n3){

    media = (Number(n1) + Number(n2) + Number(n3))/3 ;
    console.log(media);
    }
    media(prompt("N1"), prompt("N2: "), prompt("N3: "));


///////////////////////////////////




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


function media(numero1, numero2, numero3){

    media = (Number(numero1) + Number(numero2) + Number(numero3))/3 ;
    console.log(media);
    }
    media(prompt("numero1:"), prompt("numero2: "), prompt("numero3: "));





/////////////////////////////////


for(multiplo=1; multiplo<=20; multiplo++){
    if (multiplo % 3 == 0)
    {
       console.log(multiplo + " multiplo de 3");
    }else{
        console.log(multiplo + " não é multiplo de 3");
    }

}


///////////////////////////////////


function verificarPalindromo(str){
    str2 = str.split(" ");
    str2 = str2.reverse();
    str2 = str2.join(" ");
    return console.log(str === str2);

}
verificarpalindromo(prompt("Digite algo"))


/////11///////////////////////////////



function verificarSinal(x) {
    if (x > 0){console.log("Positivo")}
    if (x < 0){console.log("Negativo")}
    if (x = 0){console.log("Zero")}
    }
    let frase = prompt("Digite um número: ");
    verificarSinal(frase);
    

///////12/////////////////////////// 
  

let texto2 = prompt("qual a temperatura em celsiuns")
 function ConverterFunction(celsiun) {
    let faren = (celsius *(9/5)) + 32;
    console.log ("essa temperatura é em fahrenheit" + faren)
}

ConverterFunction(texto2)
///////13/////////////////////////// 



///////14/////////////////////////// 


function substituirPalavra(text){
    console.log(text.replace(/azul/g, "vermelho"));
}

let texto = prompt("Digite o texto: ");
substituirPalavra(texto);


///////20/////////////////////////// 


let palavra = prompt("Digite a palavra");
function contarVogais(palavra){
    
    const vogais = aeiouAEIOU;
    let contador = 0;
    for (let letra of palavra){
    if (vogais.includes(letra)) {
        contador++
    }   
    }
}
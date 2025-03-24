
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

let soma = 0;
let numero = 1; 

while (numero <= 100) {
soma = soma + numero;
numero++;
}   

console.log("A soma dos números de 1 até 100 é " + soma);

///////14/////////////////////////// 


function substituirPalavra(text){
    console.log(text.replace(/azul/g, "vermelho"));
}

let texto = prompt("Digite o texto: ");
substituirPalavra(texto);

///////15/////////////////////////// 

function verificarTamanho(str) {
    let tamanho = str.length; 
    
    if (tamanho > 10) {
        console.log("A string tem mais de 10 caracteres.");
    } else {
        console.log("A string não tem mais de 10 caracteres.");
    }
     }
    
    let entrada = prompt("Digite uma string para verificar o tamanho:");
    verificarTamanho(entrada);

///////16/////////////////////////// 

let fruta= ["uva", "banana", "laranja", "melão"];
console.log(fruta[2]);

///////17/////////////////////////// 


function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
}

let nomeUsuario = prompt("Digite seu nome: ");
let mensagem = saudacao(nomeUsuario);
console.log(mensagem);

///////18/////////////////////////// 


function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
   }
   
   let resultado = verificarAprovacao(parseFloat(prompt("Digite sua nota:")));
   console.log(resultado);
   

///////19/////////////////////////// 

console.log("Números pares de 0 a 30:");
for (let i = 0; i <= 30; i++) {
if (i % 2 === 0) {
   console.log(i);
}
}
 
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


 /////ex21///////////////////////////
    
 function somarArray(num){
    let sum = num.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);
}

somarArray([1, 2, 3]);


/////ex22/////////////////////////////

const dobrarNumero = numero => numero * 2;
console.log("O dobro é: " + dobrarNumero(prompt("Digite um número para dobrar:")));


/////ex23///////////////////////////// 

let contador = 2;
while (contador <= 20) {
    console.log(contador);
    contador += 2; 
}


/////ex24/////////////////////////////

const capitalizar = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizar(prompt("Digite uma palavra:")));


/////ex25///////////////////////////// 

const anoBissexto = ano => (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
console.log(anoBissexto(parseInt(prompt("Digite um ano:")))
? "É bissexto." : "Não é bissexto.")
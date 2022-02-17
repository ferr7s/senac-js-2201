//Comentário 1
/*Comentário 2*/

const XPTO = 10;
let minhaVar = 'Olá';
let soma = 10;
let resultado = window.prompt('Qual a soma de 7 + 3 ?');

console.log(XPTO);

minhaVar = minhaVar + ' Mundo!';

console.log(minhaVar);

function laços() {
    
    if (resultado == 10) {
        window.alert('Acertou'); 
    } else {
        window.alert('Errou'); 
    }
    
    for (let i = 0; i < 10; i++) {
        console.log(i);      
    }
}

//Voltei a função
laços();

function diretonoElemento() {
    console.log("Olá Mundo!");
  }
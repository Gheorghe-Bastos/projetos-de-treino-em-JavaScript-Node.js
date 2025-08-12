const readline = require("readline");
const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    })

let lista = [];

function numeroIndice(i) {
    if (i<=9) {

    r1.question('digite um numero: ', (i+1), (numero) => {
    lista.push(Number(numero));
    numeroIndice(i+1)

})} 
    
    else {let par = lista.filter(lista => lista % 2 === 0);
    console.log('numeros pares da lista: ', par);

}};

numeroIndice(0);
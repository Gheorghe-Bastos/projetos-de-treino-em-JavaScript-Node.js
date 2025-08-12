const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lista = ['gheorghe', 'mathias', 'alberty'];
console.log(lista, lista.length);

lista.push('pedro');

console.log('lista após adicionar alberty:', lista, lista.length);

r1.question('digite o indice do aluno que você quer remover: ', (remover) => {
    
    remover = Number(remover);
    if (remover >= 0 && remover < lista.length) {
        lista.splice(remover, 1);
        console.table(lista);
    } else {
        console.log('indice invalido.')
    }
});
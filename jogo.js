/*Criar um jogo onde o computador escolhe um número aleatório e 
o usuário tem que adivinhar. O programa deve informar
se o número é maior ou menor até que o usuário acerte.*/

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const resultado = Math.floor(Math.random() * 10) + 1;
const resultadoN = Number(resultado)
let tentativa = 0

function jogo() {

    r1.question('\n\t\tdigite um numero de 1 a 10: ', (numero) => {
        let numeroN = Number(numero);
        tentativa++;
        
        if (isNaN(numero)) {
            console.log('isso não é um numero.')
            return jogo();
        }else if (numeroN>resultadoN) {
            console.log('\nnumero muito alto, tente novamente.')
            return jogo();
        } else if (numeroN<resultadoN) {
            console.log('\nnumero muito baixo, tente novamente.')
            return jogo();
        } else if (numeroN===resultadoN) {
            console.log(`\n\t\tPARABENS! O NUMERO ERA ${resultadoN}!`)
            sair();
        }
    })
};

function sair() {
    console.log('\n\t\tSAINDO...')
    r1.close();
}

function menu() {

    console.log('\n\t\tMENU')
    console.log('\n1-começar|2-sair')
    r1.question('digite a sua escolha: ', (escolha) => {
        switch(escolha) {

            case '1':
                jogo()
            break
            case '2':
                sair()
            break
        }
    });
};

menu()
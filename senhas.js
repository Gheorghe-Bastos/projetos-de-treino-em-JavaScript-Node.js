/*Criar um sistema que gera senhas aleatórias com base nos critérios escolhidos pelo usuário, 
como tamanho da senha e inclusão de caracteres especiais.*/

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const caracteres = {
    letras: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeros: '0123456789',
    especiais: '!@#$%^&*()_+[]{}|;:,.<>?/~',
};

function gerador(tamanho, opcoes){
    let conjunto = ' '
    
    if (opcoes.letras) {
        conjunto+=caracteres.letras;
    }
    if (opcoes.numeros) {
        conjunto+=caracteres.numeros;
    }
    if (opcoes.especiais) {
        conjunto+=caracteres.especiais;
    };
    let senha = ' ';
    
    for (i = 0; i < tamanho; i++) {
    const random = Math.floor(Math.random() * conjunto.length);
        senha += conjunto[random]
    };
    console.log(`sua senha é: ${senha}`);
};


function menu() {
    console.log('\n\t\t|MENU|');
    r1.question('\ndigite a quantidade de caracteres que você quer na sua senha (no minimo 6): ', (numcaracteres) => {
        let tamanho = Number(numcaracteres);
        r1.question('\nvocê quer letras na sua senha? |s|n|: ', (letras) => {
            r1.question('\nvocê quer numeros na sua senha? |s|n|: ', (numeros) => {
                r1.question('\nvocê quer caracteres especiais na sua senha? |s|n|: ', (especiais) => {

                    const opcoes = {
                        letras: letras==='s',
                        numeros: numeros==='s',
                        especiais: especiais==='s',
                    };
                    r1.close();
                    gerador(tamanho, opcoes);
                });
            });    
        });
    });
};
menu();
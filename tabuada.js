const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function tabuada() {
    r1.question('\ndigite o numero que você quer ver a tabuada: ', (valor) => {
        let numero = Number(valor)
        r1.close
        console.log('|+|-|*|/|')
        r1.question('\ndigite a operação: ', (operação) => {
            switch (operação) {
                case '+':
                for (i = 1; i <= 10; i++) {
                    console.log(`${numero} + ${i} = ${numero+i}`);
                }break;
                case '-':
                for (i = 1; i <= 10; i++) {
                    console.log(`${i+numero} - ${numero} = ${i}`);
                }break;
                case '*':
                for (i = 1; i <= 10; i++) {
                    console.log(`${numero} x ${i} = ${numero*i}`)
                }break;
                case '/': 
                for (i = 1; i <= 10; i++) {
                    console.log(`${i*numero} / ${numero} = ${i}`)
                }break;
            } r1.close;
        tabuada();
    })
});
};
tabuada();
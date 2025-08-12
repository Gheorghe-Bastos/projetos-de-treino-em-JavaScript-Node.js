const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('qual foi a sua média? ', (nota) => {
nota = Number(nota);
    if (nota <= 4) {
        console.log('você foi reprovado.');
        r1.close();
    } else if (nota >= 5 && nota <= 6){
        console.log('você está de recuperação.');
        

        r1.question('qual foi a sua nota da recuperação? ', (recuperação) => {
            recuperação = Number(recuperação);
            if (recuperação >= 7 && nota <= 10){
                console.log('você foi aprovado(a).');
            } else {
            console.log('você foi reprovado.');
        } r1.close();
        }); 
    } if (nota >= 7 && nota <= 10){
        console.log('você foi aprovado(a).');
        r1.close();
    } 

});
     
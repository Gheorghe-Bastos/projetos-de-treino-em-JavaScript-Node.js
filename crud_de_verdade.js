const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(pergunta) {
    return new Promise((value) => {
        rl.question(pergunta, value)
    });
};

const lista = {};
let matricula = 1001;

async function adicionar() {

    const aluno = await input('\ndigite o nome do aluno: ')
    const idade = await input('\ndigite a idade do aluno: ')
    const num = Number(idade);
    const email = await input('\ndigite o email do aluno: ')

                lista[matricula] = {
                    aluno: aluno,
                    idade: num,
                    email: email
                };

                matricula++;
                menu();
           
};

function ver() {

    console.table(lista);
    menu();
}

async function deletar() {

    const id_deletar = await input('digite a matricula do aluno que você quer apagar: ')
        const id_delet = Number(id_deletar)

        if (lista[id_delet]) {
            delete lista[id_delet]
            console.log('aluno excluido com sucesso.')
            console.table(lista);
        } else {
            console.log('Índice inválido!');
        }   
        menu();
}

async function update() {

    console.table(lista)
    const up_matricula = await input('\ndigite a matricula do aluno que voce quer editar na lista:')
        const up_id = Number(up_matricula)
        if (lista[up_id]) {
            console.log(`\n\t\teditando aluno ${lista[up_id].aluno}`)

            const novo_aluno = await input('\nnovo aluno (deixe vazio se quiser manter o atual): ')
            const nova_idade = await input('\nnova idade (deixe vazio se quiser manter a atual): ')
            const novo_email = await input('\nnovo email do aluno (deixe vazio se quiser manter o atual): ')
                    
            if (novo_aluno.trim() !== '') {
                lista[up_id].aluno = novo_aluno;
            } if (nova_idade.trim() !== '') {
                const novo_num = Number(nova_idade)
                if (!isNaN(novo_num)) {
                lista[up_id].idade = novo_num
                } else {
                    console.log('idade invalida')
                }
            } if (novo_email.trim() !== '') {
                lista[up_id].email = novo_email
            }
                        
            console.table(lista);
            menu();
        } else {
            console.log('indice invalido!')
        menu();
        }
};

async function menu() {

    console.log('\n\t\tMENU')
    console.log('\n|1-adicionar aluno\n|2-ver lista\n|3-deletar\n|4-update\n|5-sair')
    const escolha = await input('\ndigite a sua escolha: ')
        switch(escolha) {
            case '1':
                adicionar()
            break
            case '2':
                ver()
            break
            case '3':
                deletar()
            break
            case '4':
                update()
            break
            case '5':
                console.log('\n\t\tSAINDO...');
                rl.close();
            break
        } if (escolha!=='1' && escolha!=='2' && escolha!=='3' && escolha!=='4' && escolha!=='5') {
            console.log('\nindice invalido.')
            menu();
        }
};

menu();
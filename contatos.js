const prompt = require('prompt-sync')()
const { adicionar } = require('./adicionar')
const { atualizar } = require('./atualizar')
const { removercontato } = require('./remover')


var nomes = [

    { nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }]
menu()
function menu() {

    console.log(`
    1.Adicionar contato
    2.Listar contato
    3.Atualizar contato
    4 Remover contato
    5.sair`)
    let resposta = prompt("Escolha uma opção: ")
    switch (resposta) {
        case '1':
            adicionar(menu, nomes)
            break;
        case '2':
            listarContatos(menu, nomes)
            break;
        case '3':
            atualizar(menu, nomes)
            break;
        case '4':
            removercontato(menu, nomes)
            break;


        default:
            break;
    }

}


function listarContatos() {
    nomes.forEach((contato, indice) => {
        console.log(`${indice + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}
        `);
        


    });
    menu()
}






















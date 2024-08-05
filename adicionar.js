const prompt = require('prompt-sync')()

function adicionar(callback,nomes) {
    let nome = prompt('Digite o seu nome: ')
    let telefone = prompt('Digite o seu telefone: ')
    let email = prompt('Digite o seu email: ')
    nomes.push({ nome: nome, telefone: telefone, email: email })
    console.log("contato cadastrado")
    callback()


}




module.exports = {adicionar}
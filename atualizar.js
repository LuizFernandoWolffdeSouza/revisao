const prompt = require('prompt-sync')()



function atualizar(callback ,nomes) {
    if (nomes.length == 0) {
        console.log("Nenhum contato cadastrado")

    } else {
        let atualizar = prompt("Digite o numero do elemento que deseja atualizar: ")
        var indice = Number(atualizar) - 1
        if (indice >= 0 && indice <= nomes.length) {
            let nome = prompt('Digite o seu nome: ')
            let telefone = prompt('Digite o seu telefone: ')
            let email = prompt('Digite o seu email: ')
            nomes[indice] = { nome, telefone, email }
            console.log("Contato atualizado com sucesso")
        }
        callback()
    }

}

module.exports = {atualizar}
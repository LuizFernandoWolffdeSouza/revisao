const prompt = require('prompt-sync')()

function removercontato(callback,nomes) {
    if (nomes.length == 0) {
        console.log("Nenhum contato cadastrado")

    }
    else {
        let remover = prompt("Digite qual contato deseja remover:")
        var indice = Number(remover) - 1
        if (indice >= 0 && indice <= nomes.length) {
            nomes.splice(indice)
            console.log("Contato excluido")

        }
        callback()
    }

}
module.exports = {removercontato}
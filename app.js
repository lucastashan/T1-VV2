function Operador(nome) {
    this.nome = nome
}

var listaOperadores = []

op1 = new Operador('Daniel')
op2 = new Operador('Rosa')

operadores.push(op1)
operadores.push(op2)

window.submitForm = function submitForm() {
    var nome = document.getElementById("userName").value
    var operador = getUserObject(nome)
    listaOperadores.push(operador)
}

window.getUserObject = function getUserObject(name) {
    var userObject = {
        name: nome
    }
    return userObject
}

window.buildUserList = function buildUserList() {
    
}
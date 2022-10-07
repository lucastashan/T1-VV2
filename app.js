
var listaOperadores = ['Joao Pedro', 'Daniel Silva', 'Ana Carolina']

atualizaLista()

function submitForm() {
    var nome = document.getElementById("userName").value
    // var operador = getUserObject(nome)
    listaOperadores.push(nome)
    console.log(listaOperadores)
    
    atualizaLista()
}


function deleteForm() {
    var nome = document.getElementById("ops").value
    listaOperadores = listaOperadores.filter(function(item) {
        return item !== nome
    })
    console.log(listaOperadores)
    atualizaLista()
}

function atualizaLista() {
    var x = document.getElementById('ops')
    x.innerHTML = ''
    listaOperadores.forEach(element => {
        var option = document.createElement('option')
        option.text = element
        x.add(option)
    })
}

function changePage() {
    window.location.href = 'dashboard/index.html'
}

function printar() {
    console.log(listaOperadores)
}

// Entregas
var id = 1
var dataAtual = new Date()
class Entrega {
    constructor(descricao, nrCasa, operador) {
        this.id = id
        id++
        this.dia = dataAtual.getDate()
        this.mes = dataAtual.getMonth()
        this.ano = dataAtual.getFullYear()
        this.horas = dataAtual.getHours()
        this.minutos = dataAtual.getMinutes()
        this.descricao = descricao
        this.nrCasa = nrCasa
        this.operador = operador
    }
}

const ent = new Entrega('sei la', '123', 'Daniel')
console.log('ent:' + ent.id + ' ' + ent.dia)
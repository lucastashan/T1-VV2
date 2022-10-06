
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
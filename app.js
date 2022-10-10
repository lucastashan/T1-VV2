
var listaOperadores = ['Joao Pedro', 'Daniel Silva', 'Ana Carolina']

atualizaLista()

function submitForm() {
    var nome = document.getElementById("userName").value
    // var operador = getUserObject(nome)
    listaOperadores.push(nome)
    // console.log(listaOperadores)
    
    atualizaLista()
}


function deleteForm() {
    var nome = document.getElementById("ops").value
    listaOperadores = listaOperadores.filter(function(item) {
        return item !== nome
    })
    // console.log(listaOperadores)
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

// Entregas
var id = 1
class Entrega {
    constructor(descricao, nrCasa, operador) {
        var dataAtual = new Date()
        this.id = id
        id++
        this.dia = dataAtual.getDate()
        this.mes = dataAtual.getMonth()
        this.ano = dataAtual.getFullYear()
        this.horas = dataAtual.getHours()
        this.minutos = dataAtual.getMinutes()
        this.descricao = descricao
        this.nrCasa = nrCasa
        // if(listaOperadores.includes(operador)) {
        //     this.operador = operador
        // } else {
        //     this.operador = operador
        // }
        this.operador = operador
    }
}

var listaEntregas = [
    new Entrega('Pc gamer', '110', 'Ana Carolina'),
    new Entrega('Cadeira de escritorio', '99', 'Joao Pedro'),
    new Entrega('Cama box', '450', 'Daniel Silva')
]

function registraEntrega() {
    var entrega = new Entrega(
        document.getElementById('descEntrega').value,
        document.getElementById('nrCasaEntrega').value,
        document.getElementById('opEntrega').value
    )

    if(listaOperadores.includes(entrega.operador)) {
        listaEntregas.push(entrega)
    } else {
        alert('Operador não existe.')
    }
    console.log(listaEntregas)
}

// Moradores
class Morador{
    constructor(nomeMorador, rg, nrCasaMorador){
        this.nomeMorador = nomeMorador
        // AQUI ELE DA ERRO POIS NAO TEM ACESSO A LISTAMORADORES
        // if(listaMoradores.some(m => m.rg === rg)) {
        //     this.rg = rg
        // } else {
        //     this.rg = rg
        // }    
        this.rg = rg
        this.nrCasaMorador = nrCasaMorador
        this.ativo = true
    }
}

var listaMoradores = [
    new Morador('Pedrinho', '123456789', '110'),
    new Morador('Karine', '987654321', '910')
]

function morador() {
    var morador = new Morador(
        document.getElementById('nomeMorador').value,
        document.getElementById('rgMorador').value,
        document.getElementById('nrCasaMorador').value
    )    

    if(listaMoradores.some(m => m.rg === morador.rg)) {
        alert('RG já cadastrado no sistema.')
    } else if( getAtivos(morador.nrCasaMorador) > 7){
        alert('Número de pessoas ativas na casa atingiu o limite.')
    } else {
        listaMoradores.push(morador)
    }

    // console.log(listaMoradores)
    addMorador(morador)
}

function getAtivos(numCasa) {
    ativas = 0
    listaMoradores.forEach(element => {
        if(element.nrCasaMorador === numCasa){
            ativas++
        }
    })
    return ativas
}

// Faz a lista de moradores
function ulMoradores() {
    listaMoradores.forEach(element => {
        var item = document.createElement('li')
        var nome = item.appendChild(document.createElement('p'))
        nome.appendChild(document.createTextNode('Nome: '))
        nome.appendChild(document.createTextNode(element.nomeMorador))
        item.appendChild(nome)
        var rg = item.appendChild(document.createElement('p'))
        rg.appendChild(document.createTextNode('RG: '))
        rg.appendChild(document.createTextNode(element.rg))
        item.appendChild(rg)
        var nrCasa = item.appendChild(document.createElement('p'))
        nrCasa.appendChild(document.createTextNode('Número da casa: '))
        nrCasa.appendChild(document.createTextNode(element.nrCasaMorador))
        item.appendChild(nrCasa)
        item.appendChild(document.createTextNode('Ativo'))
        var ativo = item.appendChild(document.createElement('input'))
        ativo.type = 'checkbox' 
        ativo.appendChild(document.createTextNode('Ativo'))    
        item.appendChild(ativo)
        document.getElementById('ulMoradores').appendChild(item)
    })
}

ulMoradores()

function addMorador(morador) {
    var item = document.createElement('li')
    var nome = item.appendChild(document.createElement('p'))
    nome.appendChild(document.createTextNode('Nome: '))
    nome.appendChild(document.createTextNode(morador.nomeMorador))
    item.appendChild(nome)
    var rg = item.appendChild(document.createElement('p'))
    rg.appendChild(document.createTextNode('RG: '))
    rg.appendChild(document.createTextNode(morador.rg))
    item.appendChild(rg)
    var nrCasa = item.appendChild(document.createElement('p'))
    nrCasa.appendChild(document.createTextNode('Número da casa: '))
    nrCasa.appendChild(document.createTextNode(morador.nrCasaMorador))
    item.appendChild(nrCasa)
    document.getElementById('ulMoradores').appendChild(item)
}
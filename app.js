
var listaOperadores = ['Joao Pedro', 'Daniel Silva', 'Ana Carolina', 'Carlos']

function getListaOperadores() {
	return listaOperadores
}

function submitForm() {
    var nome = document.getElementById("userName").value
    addOperador(nome)    
    atualizaLista()
}


function deleteForm() {
    var nome = document.getElementById("ops").value
    deleteOperador(nome)
    console.log(listaOperadores)
    atualizaLista()
}

function addOperador(nome) {
	listaOperadores.push(nome)
}

function deleteOperador(nome) {
    var bool = true
    listaEntregas.forEach(element => {
        if(element.operador === nome){
            console.log('O operador possui uma entrega vinculada a ele.')
            bool = false
        }
    })
    if(bool){
        listaOperadores = listaOperadores.filter(function(item) {
            return item !== nome
        })
    }
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
        this.date = new Date()
        this.id = id
        id++
        this.descricao = descricao
        this.nrCasa = nrCasa
        // if(listaOperadores.includes(operador)) {
        //     this.operador = operador
        // } else {
        //     this.operador = operador
        // }
        this.operador = operador
        this.retirada = false
    }
}

var listaEntregas = [
    new Entrega('Pc gamer', '110', 'Ana Carolina'),
    new Entrega('Cadeira de escritorio', '99', 'Joao Pedro'),
    new Entrega('Cama box', '450', 'Daniel Silva')
]

function getListaEntregas() {
	return listaEntregas
}

function registraEntrega() {
    regEntrega(
        document.getElementById('descEntrega').value,
        document.getElementById('nrCasaEntrega').value,
        document.getElementById('opEntrega').value
    )
}

function regEntrega(descricao, nrCasa, operador) {
    var entrega = new Entrega(descricao, nrCasa, operador)
    if(listaOperadores.includes(entrega.operador)) {
        listaEntregas.push(entrega)
    } else {
        console.log('Operador não existe.')
    }
    // console.log(listaEntregas)
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

function getListaMoradores () {
	return listaMoradores
}

function adicionaMorador(nome, rgMorador, nrCasaMorador) {
	var morador = new Morador(nome, rgMorador, nrCasaMorador) 
	if(listaMoradores.some(m => m.rg === morador.rg)) {
		console.log('RG já cadastrado no sistema.')
	} else if( getAtivos(morador.nrCasaMorador) > 7){
		console.log('Número de pessoas ativas na casa atingiu o limite.')
	} else {
		listaMoradores.push(morador)
	}
	// console.log(listaMoradores)	
}

function morador() {
	adicionaMorador(
		document.getElementById('nomeMorador').value,
        document.getElementById('rgMorador').value,
        document.getElementById('nrCasaMorador').value
	)
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

// Faz a tabela de moradores
function tbMoradores() {
    var item = document.createElement('tr')
    var nome = item.appendChild(document.createElement('th'))
    nome.appendChild(document.createTextNode('Nome'))
    var rg = item.appendChild(document.createElement('th'))
    rg.appendChild(document.createTextNode('RG'))
    var nrCasa = item.appendChild(document.createElement('th'))
    nrCasa.appendChild(document.createTextNode('Número da casa'))
    var ativo = item.appendChild(document.createElement('th'))
    ativo.appendChild(document.createTextNode('Ativo'))
    document.getElementById('tbMoradores').appendChild(item)
    listaMoradores.forEach(element => {
        addMorador(element)
    })
}

function addMorador(morador) {
    var item = document.createElement('tr')
    var nome = item.appendChild(document.createElement('td'))
    nome.appendChild(document.createTextNode(morador.nomeMorador))
    var rg = item.appendChild(document.createElement('td'))
    rg.appendChild(document.createTextNode(morador.rg))
    var nrCasa = item.appendChild(document.createElement('td'))
    nrCasa.appendChild(document.createTextNode(morador.nrCasaMorador))
    var ativo = item.appendChild(document.createElement('input'))
    ativo.type = 'checkbox'
    ativo.checked = true
    // ativo.id = morador.rg
    ativo.addEventListener('change', function() {
        if (!this.checked) {
            desativarMorador(morador.rg)
            this.checked = false
        } else {
            alert('Morador não pode ser reativado.')
            this.checked = false
        }
    })
    document.getElementById('tbMoradores').appendChild(item)
}

function desativarMorador(rgMorador) {
    listaMoradores.forEach(element => {
        if(element.rg === rgMorador) {
            element.ativo = false
            return
        }
    })
}

class Retirada {
    constructor(id, moradorRetirou, operador) {
        this.id = id
        this.date = new Date()
        this.moradorRetirou = moradorRetirou
        this.operador = operador
    }
}

var listaEntregasRetiradas = []

function getListaEntregasRetiradas() {
	return listaEntregasRetiradas
}

function registraRetirada(idEntrega, moradorRet, operador) {
	var aux = true
	var entregaExiste = false
	listaMoradores.forEach(element => {
		if(element.rg === moradorRet) {
			if(!element.ativo) {
				console.log('Morador inativo. Não é permitida a retirada')
				aux = false
			}
		}
	})
	listaEntregas.forEach(element => {
		if(element.id.toString() === idEntrega){
			entregaExiste = true
		}
	});
	if(!entregaExiste) {
		console.log('Entrega inexistente por favor adicione uma entrega válida')
	}
	if(aux && entregaExiste) {
		// Aqui vou mudar a entrega para retirada true
		listaEntregas.forEach(element => {
			if(element.id === idEntrega){
				element.retirada = true
				return
			}
		})
		var retirada = new Retirada(idEntrega, moradorRet, operador)
		listaEntregasRetiradas.push(retirada)
	}
}

function getEntregasNaoRetiradas() {
	var entregasNaoRet = listaEntregas.filter(entrega => !entrega.retirada)
	var sortedEntregasNaoRet = entregasNaoRet.sort(
		(objA, objB) => Number(objA.date) - Number(objB.date)
	)
	return sortedEntregasNaoRet
}

function registraRetiradahtml() {
    registraEntrega(
        document.getElementById('idEntrega').value,
        document.getElementById('moradorRet').value,
        document.getElementById('ops').value
    )
    //console.log(listaEntregasRetiradas)
}

function pesquisarDescricao() {
    var string = document.getElementById('pesqDescEntrega').value
    var listaDescricoes = []
    listaEntregas.forEach(element => {
        if(element.descricao.includes(string)){
            listaDescricoes.push(element)
        }
    })
    // console.log(listaDescricoes)
    resultadoPesquisa(listaDescricoes)
}


function resultadoPesquisa(listaDescricoes) {
    var x = document.getElementById('ulPesqEntregas')
    x.innerHTML = ''
    var tr = x.appendChild(document.createElement('tr'))
    var td = tr.appendChild(document.createElement('th'))
    td.appendChild(document.createTextNode('ID'))
    td = tr.appendChild(document.createElement('th'))
    td.appendChild(document.createTextNode('Descrição'))
    listaDescricoes.forEach(element => {
        var item = document.createElement('tr')
        var descricao = item.appendChild(document.createElement('td'))
        descricao.appendChild(document.createTextNode(element.id))
        descricao = item.appendChild(document.createElement('td'))
        descricao.appendChild(document.createTextNode(element.descricao))
        x.appendChild(item)        
    });
}

function entregasNaoRetiradashtml() {
    var x = document.getElementById('ulEntregasNaoRetiradas')
    x.innerHTML = ''
    var tr = x.appendChild(document.createElement('tr'))
    var td = tr.appendChild(document.createElement('th'))
    td.appendChild(document.createTextNode('ID'))
    td = tr.appendChild(document.createElement('th'))
    td.appendChild(document.createTextNode('Descrição'))
    listaEntregas.forEach(element => {
        if(!element.retirada) {
            var item = document.createElement('tr')
            var descricao = item.appendChild(document.createElement('td'))
            descricao.appendChild(document.createTextNode(element.id))
            descricao = item.appendChild(document.createElement('td'))
            descricao.appendChild(document.createTextNode(element.descricao))
            x.appendChild(item)
        }
    });
}

module.exports = { getListaOperadores, deleteOperador, addOperador, Entrega, regEntrega, getListaEntregas,
adicionaMorador, getListaMoradores, desativarMorador, Morador, registraRetirada, getListaEntregasRetiradas,
getAtivos, registraRetirada, getEntregasNaoRetiradas}
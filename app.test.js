const app = require('./app')

test('Adicionar um operador, associar uma entrega a ele, e tentar excluir ele', () => {
  var operador = 'Neymar Jr'
  app.addOperador(operador)
  app.regEntrega('Sofa', '10101010101', operador)
  app.deleteOperador(operador)
  expect(app.getListaOperadores().includes(operador)).toBeTruthy()
})

test('Remover e adicionar um operador', () => {
  var len = app.getListaOperadores().length
  app.deleteOperador('Carlos')
  app.addOperador('Kelvin')
  expect(app.getListaOperadores().length).toBe(len)
})

test('Associar uma entrega a um operador inexistente', () => {
  var desc = 'Cadeira da skol'
  app.regEntrega(desc, '87', 'nao existe')
  var registrou = false
  app.getListaEntregas().forEach(element => {
    if(element.descricao === desc){
      registrou = true
    }
  })
  expect(registrou).toBeFalsy()
})

test('Adicionar um morador válido e desativar', () => {
  app.adicionaMorador('Cristiano Ronaldo', '77777777777', '77')
  app.desativarMorador('77777777777')
  var ativo = true
  app.getListaMoradores().forEach(morador => {
    if(morador.rg === '77777777777'){
      ativo = morador.ativo
    }
  })
  expect(ativo).toBeFalsy()
})

test('Associar retirada a morador desativado', () => {
  var len = app.getListaEntregasRetiradas().length
  app.registraRetirada('1', '77777777777', 'Ana Carolina')
  expect(app.getListaEntregasRetiradas().length).toBe(len)
})

test('Ativar 8 pessoas na casa e tentar adicionar mais uma pessoa', () => {
  var nome = 'Cafu'
  app.adicionaMorador('Messi', '2', '910')
  app.adicionaMorador('Mbappe', '3', '910')
  app.adicionaMorador('Vinicius Jr', '4', '910')
  app.adicionaMorador('Pele', '5', '910')
  app.adicionaMorador('Maradona', '6', '910')
  app.adicionaMorador('Robinho', '7', '910')
  app.adicionaMorador('Kaka', '8', '910')
  app.adicionaMorador(nome, '2', '910')
  var encontrou = false
  app.getListaMoradores().forEach(element => {
    if(element.nomeMorador === nome){
      encontrou = true
    }
  })
  expect(encontrou).toBeFalsy()
})

test('Associar retirada a morador ativo', () => {
  var len = app.getListaEntregasRetiradas().length + 1
  app.registraRetirada('2', '123456789', 'Ana Carolina')
  expect(app.getListaEntregasRetiradas().length).toBe(len)
})

test('Entrega deve sinalizar que já foi retirada', () => {
  app.getListaEntregas().forEach(element => {
    if(element.id === '1') {
      expect(element.retirada).toBeTruthy()
    }
  })
})

test('Retirada de uma entrega não existente', () => {
  var idInexistente = '999'
  app.registraRetirada(idInexistente, '123456789', 'Ana Carolina')
  var retirou = false
  app.getListaEntregasRetiradas().forEach(element => {
    if(element.id === idInexistente){
      retirou = true
    }
  })
  expect(retirou).toBeFalsy()
})

test('Verifica entregas não retiradas', () => {
  var sortedEntregas = app.getEntregasNaoRetiradas()
  var isSorted = sortedEntregas.slice(1).every((item, i) => sortedEntregas[i].date <= item.date)
  expect(isSorted).toBeTruthy()
})
const app = require('./app.js')

test('Remove um operador sem entrega vinculada', () => {
    app.deleteOperador('Carlos')
    expect(app.listaOperadores.length).toBe(3)
})
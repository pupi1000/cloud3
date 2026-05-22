const sumar = require('./calculadora')

test('Suma de 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5)
})

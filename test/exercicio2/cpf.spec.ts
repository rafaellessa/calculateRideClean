import { validateCpf } from '../../src/exercicio2/after/cpf'

describe('CPF', () => {
  it('Deve validar um cpf válido', () => {
    const isValid = validateCpf('903.542.750-54')
    expect(isValid).toBeTruthy()
  })
  it('Deve validar um cpf inválido', () => {
    const isValid = validateCpf('123.456.789-99')
    expect(isValid).toBeFalsy()
  })

  it('Deve validar um cpf válido sem os pontos', () => {
    const isValid = validateCpf('90354275054')
    expect(isValid).toBeTruthy()
  })

  test('Deve validar um cpf válido com alguns pontos', function () {
    const isValid = validateCpf('935.411.34780')
    expect(isValid).toBeTruthy()
  })

  const wrongSameDigitCpf = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33'
  ]
  test.each(wrongSameDigitCpf)('Deve validar um cpf inválido com todos os números iguais', function (cpf) {
    const isValid2 = validateCpf(cpf)
    expect(isValid2).toBeFalsy()
  })
})

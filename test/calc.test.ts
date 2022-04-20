import { calculateRide } from '../src/calculate-ride'

describe('calc', () => {
  it('deve calcular o valor da corrida em horário normal', () => {
    const result = calculateRide([{ dist: 10, ds: new Date('2021-03-01T10:00:00') }])
    expect(result).toBe(21)
  })

  it('deve calcular o valor da corrida em horário noturno', () => {
    const result = calculateRide([{ dist: 10, ds: new Date('2021-03-01T23:00:00') }])
    expect(result).toBe(39)
  })

  it('deve calcular o valor da corrida no domingo', () => {
    const result = calculateRide([{ dist: 10, ds: new Date('2021-03-07T10:00:00') }])
    expect(result).toBe(29)
  })

  it('deve calcular o valor da corrida no domingo em horário noturno', () => {
    const result = calculateRide([{ dist: 10, ds: new Date('2021-03-07T23:00:00') }])
    expect(result).toBe(50)
  })

  it('deve calcular o valor da corrida mínima', () => {
    const result = calculateRide([{ dist: 3, ds: new Date('2021-03-01T10:00:00') }])
    expect(result).toBe(10)
  })

  it('deve retornar -1 se a distancia for inválida', () => {
    const result = calculateRide([{ dist: -3, ds: new Date('2021-03-01T10:00:00') }])
    expect(result).toBe(-1)
  })

  it('deve retornar -2 se a data for inválida', () => {
    const result = calculateRide([{ dist: 10, ds: new Date('sjaklsjal') }])
    expect(result).toBe(-2)
  })
})

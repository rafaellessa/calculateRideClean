import { calculateRide } from '../../src/exercicio1/procedural/calculate-ride'

describe('calc', () => {
  it('deve calcular o valor da corrida em horário normal', () => {
    const fare = calculateRide([{ distance: 10, date: new Date('2021-03-01T10:00:00') }])
    expect(fare).toBe(21)
  })

  it('deve calcular o valor da corrida em horário noturno', () => {
    const fare = calculateRide([{ distance: 10, date: new Date('2021-03-01T23:00:00') }])
    expect(fare).toBe(39)
  })

  it('deve calcular o valor da corrida no domingo', () => {
    const fare = calculateRide([{ distance: 10, date: new Date('2021-03-07T10:00:00') }])
    expect(fare).toBe(29)
  })

  it('deve calcular o valor da corrida no domingo em horário noturno', () => {
    const fare = calculateRide([{ distance: 10, date: new Date('2021-03-07T23:00:00') }])
    expect(fare).toBe(50)
  })

  it('deve calcular o valor da corrida mínima', () => {
    const fare = calculateRide([{ distance: 3, date: new Date('2021-03-01T10:00:00') }])
    expect(fare).toBe(10)
  })

  it('deve retornar -1 se a distancia for inválida', () => {
    expect(() => calculateRide([{ distance: -3, date: new Date('2021-03-01T10:00:00') }])).toThrow(new Error('Invalid Distance'))
  })

  it('deve retornar -2 se a data for inválida', () => {
    expect(() => calculateRide([{ distance: 10, date: new Date('sjaklsjal') }])).toThrow(new Error('Invalid Date'))
  })

  it('deve calcular o valor da corrida em múltiplos horários', () => {
    const fare = calculateRide([
      { distance: 10, date: new Date('2021-03-01T21:00:00') },
      { distance: 10, date: new Date('2021-03-01T22:00:00') }
    ])
    expect(fare).toBe(60)
  })
})

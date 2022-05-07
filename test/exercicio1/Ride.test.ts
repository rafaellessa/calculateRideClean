import NormalFareCalculator from '../../src/exercicio1/NormalFareCalculator'
import OvernightFareCalculator from '../../src/exercicio1/OvernightFareCalculator'
import OvernightSundayFareCalculator from '../../src/exercicio1/OvernightSundayFareCalculator'
import Ride from '../../src/exercicio1/Ride'
import SundayFareCalculator from '../../src/exercicio1/SundayFareCalculator'

describe('Ride', () => {
  let ride: Ride
  beforeEach(() => {
    const normalFareCalculator = new NormalFareCalculator()
    const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator)
    const overnightSundayFareCalculator = new OvernightSundayFareCalculator(sundayFareCalculator)
    const overnightFareCalculator = new OvernightFareCalculator(overnightSundayFareCalculator)
    ride = new Ride(overnightFareCalculator)
  })
  it('deve calcular o valor da corrida em horário normal', () => {
    ride.addSegment(10, new Date('2021-03-01T10:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(21)
  })

  it('deve calcular o valor da corrida em horário noturno', () => {
    ride.addSegment(10, new Date('2021-03-01T23:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(39)
  })

  it('deve calcular o valor da corrida no domingo', () => {
    ride.addSegment(10, new Date('2021-03-07T10:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(29)
  })

  it('deve calcular o valor da corrida no domingo em horário noturno', () => {
    ride.addSegment(10, new Date('2021-03-07T23:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(50)
  })

  it('deve calcular o valor da corrida mínima', () => {
    ride.addSegment(3, new Date('2021-03-01T10:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(10)
  })

  it('deve retornar -1 se a distancia for inválida', () => {
    expect(() => ride.addSegment(-3, new Date('2021-03-01T10:00:00'))).toThrow(new Error('Invalid Distance'))
  })

  it('deve retornar -2 se a data for inválida', () => {
    expect(() => ride.addSegment(10, new Date('sjaklsjal'))).toThrow(new Error('Invalid Date'))
  })

  it('deve calcular o valor da corrida em múltiplos horários', () => {
    ride.addSegment(10, new Date('2021-03-01T21:00:00'))
    ride.addSegment(10, new Date('2021-03-01T22:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(60)
  })
})

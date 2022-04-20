import Segment from './Segment'
import OvernightFareCalculator from './OvernightFareCalculator'
import OvernightSundayFareCalculator from './OvernightSundayFareCalculator'
import SundayFareCalculator from './SundayFareCalculator'
import NormalFareCalculator from './NormalFareCalculator'
export default class FareCalculatorFactory {
  static create (segment: Segment) {
    if (segment.isOvernight() && !segment.isSunday()) {
      return new OvernightFareCalculator()
    }
    if (segment.isOvernight() && segment.isSunday()) {
      return new OvernightSundayFareCalculator()
    }
    if (segment.isSunday()) {
      return new SundayFareCalculator()
    }
    return new NormalFareCalculator()
  }
}

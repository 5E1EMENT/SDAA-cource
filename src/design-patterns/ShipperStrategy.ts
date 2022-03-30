abstract class ShipperStrategy {
  abstract getCost(weight: number): number
}

export class AirEastShipper extends ShipperStrategy {
  getCost(weight: number): number {
    if (weight < 15) {
      return weight * 0.39
    } else if (weight > 15 && weight <= 160) {
      return weight * 0.25
    } else {
      return 10
    }
  }
}
export class ChicagoSprintShipper extends ShipperStrategy {
  getCost(weight: number) {
    if (weight < 15) {
      return weight * 0.42
    } else if (weight > 15 && weight <= 160) {
      return weight * 0.2
    } else {
      return 0
    }
  }
}
export class PacificParcelShipper extends ShipperStrategy {
  getCost(weight: number) {
    if (weight < 15) {
      return weight * 0.51
    } else if (weight > 15 && weight <= 160) {
      return weight * 0.19
    } else {
      return weight * 0.21
    }
  }
}

export class Context {
  private strategy: ShipperStrategy

  public setStrategy(strategy: ShipperStrategy) {
    this.strategy = strategy
  }

  public executeStrategy(weight: number) {
    return this.strategy.getCost(weight)
  }
}

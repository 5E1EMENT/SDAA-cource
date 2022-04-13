abstract class IShipperStrategy {
  name: string
  abstract getCost(weight: number): number
  getName() {
    return this.name
  }
}

const mapShipperStrategy = {
  getAirEastShipperCost(weight: number): number {
    if (weight < 15) {
      return weight * 0.39
    } else if (weight > 15 && weight <= 160) {
      return weight * 0.25
    } else {
      return 10
    }
  },
  getChicagoSprintShipperCost(weight: number): number {
    if (weight < 15) {
      return weight * 0.42
    } else if (weight > 15 && weight <= 160) {
      return weight * 0.2
    } else {
      return 0
    }
  },
  getPacificParcelShipperCost(weight: number): number {
    if (weight < 15) {
      return weight * 0.51
    } else if (weight > 15 && weight <= 160) {
      return weight * 0.19
    } else {
      return weight * 0.21
    }
  },
}

export class AirEastShipper extends IShipperStrategy {
  name = 'AirEastShipper'
  getCost(weight: number): number {
    return mapShipperStrategy.getAirEastShipperCost(weight)
  }
}
export class ChicagoSprintShipper extends IShipperStrategy {
  name = 'ChicagoSprintShipper'
  getCost(weight: number) {
    return mapShipperStrategy.getChicagoSprintShipperCost(weight)
  }
}
export class PacificParcelShipper extends IShipperStrategy {
  name = 'PacificParcelShipper'
  getCost(weight: number) {
    return mapShipperStrategy.getPacificParcelShipperCost(weight)
  }
}

export class ShipperStrategy {
  private strategy: IShipperStrategy

  public setStrategy(strategy: IShipperStrategy) {
    this.strategy = strategy
  }

  public executeStrategy(weight: number) {
    const strategyData = {
      cost: this.strategy.getCost(weight),
      shipperName: this.strategy.getName(),
    }
    return strategyData
  }
}

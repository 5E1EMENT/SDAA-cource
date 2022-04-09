import { Shipment } from './Shipment'
import {
  ShipperStrategy,
  AirEastShipper,
  ChicagoSprintShipper,
  PacificParcelShipper,
} from './ShipperStrategy'

export class Shipper {
  public static shipper: Shipper

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance() {
    if (!Shipper.shipper) {
      Shipper.shipper = new Shipper()
    }
    return Shipper.shipper
  }

  public getCost(shipment: Shipment) {
    const shipperStrategy = new ShipperStrategy()
    switch (true) {
      case shipment.getZipCode() < 3: {
        shipperStrategy.setStrategy(new AirEastShipper())
        break
      }
      case shipment.getZipCode() >= 4 && shipment.getZipCode() <= 6: {
        shipperStrategy.setStrategy(new ChicagoSprintShipper())
        break
      }
      case shipment.getZipCode() >= 7 && shipment.getZipCode() <= 9: {
        shipperStrategy.setStrategy(new PacificParcelShipper())
        break
      }
      default: {
        shipperStrategy.setStrategy(new AirEastShipper())
        break
      }
    }

    return shipperStrategy.executeStrategy(shipment.Weight)
  }
}

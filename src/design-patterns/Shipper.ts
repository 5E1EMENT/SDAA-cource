import { Client } from './Client'
import {
  Context,
  AirEastShipper,
  ChicagoSprintShipper,
  PacificParcelShipper,
} from './ShipperStrategy'

export class Shipper {
  public static shipper: Shipper
  private client: Client

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance() {
    if (!Shipper.shipper) {
      Shipper.shipper = new Shipper()
    }
    return Shipper.shipper
  }

  public setContext(client: any) {
    this.client = client
  }

  public getCost() {
    const shipperContext = new Context()
    console.log(2222222, this.client)
    switch (true) {
      case this.client.getZipCode() < 3: {
        shipperContext.setStrategy(new AirEastShipper())
        break
      }
      case this.client.getZipCode() >= 4 && this.client.getZipCode() <= 6: {
        shipperContext.setStrategy(new ChicagoSprintShipper())
        break
      }
      case this.client.getZipCode() >= 7 && this.client.getZipCode() <= 9: {
        shipperContext.setStrategy(new PacificParcelShipper())
        break
      }
      default: {
        shipperContext.setStrategy(new AirEastShipper())
        break
      }
    }

    console.log(shipperContext.executeStrategy(this.client.getWeight()))
  }
}

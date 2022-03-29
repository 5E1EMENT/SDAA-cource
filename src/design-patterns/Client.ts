import { Shipment } from './Shipment'

export class Client {
  private constructor(private shipment: Shipment) {}

  public shipItSelf(): string {
    return `Shipment Id:${this.shipment.getShipmentID()}`
  }
}

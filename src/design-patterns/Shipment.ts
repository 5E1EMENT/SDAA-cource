import { Client } from './Client'
import { ShipmentFactory } from './ShipmentFactory'
import { Shipper } from './Shipper'
let shipmentId = 0

export class Shipment {
  private static shipment: Shipment
  private client: Client

  private constructor() {
    shipmentId += 1
  }

  public getShipmentID() {
    return shipmentId
  }

  public setClient(client: Client) {
    this.client = client
  }

  public static getInstance() {
    if (!Shipment.shipment) {
      Shipment.shipment = new Shipment()
    }
    return Shipment.shipment
  }

  public makeShip() {
    const shipper = Shipper.getInstance()

    const shipment = ShipmentFactory.getShipment(this.client)
    shipper.setContext(shipment)
    shipper.getCost()
  }
}

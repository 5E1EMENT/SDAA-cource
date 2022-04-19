import { ShipmentFactory } from './ShipmentFactory'
import { Shipper } from './Shipper'

export interface IShipment {
  ShipmentID?: number
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
}

export class Shipment implements IShipment {
  private static instance: Shipment
  ShipmentID = 0
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public getShipmentID() {
    return this.ShipmentID
  }

  public getZipCode(): number {
    return +Shipment.instance.ToZipCode[0]
  }

  getWeight() {
    return Shipment.instance.Weight
  }

  public static getInstance() {
    if (!Shipment.instance) {
      Shipment.instance = new Shipment()
    }
    return Shipment.instance
  }

  public ship(shipment: Shipment): void {
    const shipper = Shipper.getInstance()
    const { cost, shipperName } = shipper.getShipperData(shipment)
    const shipmentParcel = ShipmentFactory.getShipmentType(shipment)
    console.log(
      `id: ${this.getShipmentID()}, to: ${this.ToAddress}, from ${
        this.FromAddress
      }, shipperName: ${shipperName} cost: ${cost}$, weight: ${
        shipmentParcel.Weight
      }, shipment type: ${shipmentParcel.Type}`
    )
  }
}

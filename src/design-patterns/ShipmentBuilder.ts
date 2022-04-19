import { IShipment, Shipment } from './Shipment'

export class ShipmentBuilder {
  shipment: Shipment = Shipment.getInstance()

  setShipmentID(ShipmentID?: number) {
    if (ShipmentID) {
      this.shipment.ShipmentID = ShipmentID
    } else {
      this.shipment.ShipmentID += 1
    }
    return this
  }

  setToAddress(toAddress: string) {
    this.shipment.ToAddress = toAddress
    return this
  }

  setFromAddress(fromAddress: string) {
    this.shipment.FromAddress = fromAddress
    return this
  }

  setToZipCode(toZipCode: string) {
    this.shipment.ToZipCode = toZipCode
    return this
  }

  setFromZipCode(fromZipCode: string) {
    this.shipment.FromZipCode = fromZipCode
    return this
  }

  setWeight(weight: number) {
    this.shipment.Weight = weight
    return this
  }

  build({
    ShipmentID,
    ToAddress,
    FromAddress,
    ToZipCode,
    FromZipCode,
    Weight,
  }: IShipment) {
    this.setShipmentID(ShipmentID)
    this.setToAddress(ToAddress)
    this.setFromAddress(FromAddress)
    this.setToZipCode(ToZipCode)
    this.setFromZipCode(FromZipCode)
    this.setWeight(Weight)

    return this.shipment
  }
}

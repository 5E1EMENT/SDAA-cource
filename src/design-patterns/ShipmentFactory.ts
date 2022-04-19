import { IShipment, Shipment } from './Shipment'

export class Letter implements IShipment {
  ShipmentID: number
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
  Type: string

  constructor({
    ShipmentID,
    ToAddress,
    FromAddress,
    ToZipCode,
    FromZipCode,
    Weight,
  }: IShipment) {
    this.ShipmentID = ShipmentID
    this.ToAddress = ToAddress
    this.FromAddress = FromAddress
    this.ToZipCode = ToZipCode
    this.FromZipCode = FromZipCode
    this.Weight = Weight
    this.Type = 'Letter'
  }

  getWeight(): number {
    return this.Weight
  }
}

export class Package implements IShipment {
  ShipmentID: number
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
  Type: string

  constructor({
    ShipmentID,
    ToAddress,
    FromAddress,
    ToZipCode,
    FromZipCode,
    Weight,
  }: IShipment) {
    this.ShipmentID = ShipmentID
    this.ToAddress = ToAddress
    this.FromAddress = FromAddress
    this.ToZipCode = ToZipCode
    this.FromZipCode = FromZipCode
    this.Weight = Weight
    this.Type = 'Package'
  }

  getWeight(): number {
    return this.Weight
  }
}

export class Oversized implements IShipment {
  ShipmentID: number
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
  Type: string

  constructor({
    ShipmentID,
    ToAddress,
    FromAddress,
    ToZipCode,
    FromZipCode,
    Weight,
  }: IShipment) {
    this.ShipmentID = ShipmentID
    this.ToAddress = ToAddress
    this.FromAddress = FromAddress
    this.ToZipCode = ToZipCode
    this.FromZipCode = FromZipCode
    this.Weight = Weight
    this.Type = 'Oversized'
  }

  getWeight(): number {
    return this.Weight
  }
}

export class ShipmentFactory {
  static getShipmentType(shipment: Shipment) {
    switch (true) {
      case shipment.getWeight() <= 15:
        return new Letter(shipment)
      case shipment.getWeight() > 15 && shipment.getWeight() <= 160:
        return new Package(shipment)
      default:
        return new Oversized(shipment)
    }
  }
}

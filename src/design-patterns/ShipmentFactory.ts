import { Client } from './Client'

export abstract class Parcel implements Client {
  ShipmentID: number
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
  Type: string

  abstract getZipCode(): string
  abstract getWeight(): number
}

export class Letter implements Parcel {
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
  }: Parcel) {
    this.ShipmentID = ShipmentID
    this.ToAddress = ToAddress
    this.FromAddress = FromAddress
    this.ToZipCode = ToZipCode
    this.FromZipCode = FromZipCode
    this.Weight = Weight
    this.Type = 'Letter'
  }

  getZipCode(): string {
    return this.ToZipCode
  }
  getWeight(): number {
    return this.Weight
  }
}

export class Package implements Parcel {
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
  }: Parcel) {
    this.ShipmentID = ShipmentID
    this.ToAddress = ToAddress
    this.FromAddress = FromAddress
    this.ToZipCode = ToZipCode
    this.FromZipCode = FromZipCode
    this.Weight = Weight
    this.Type = 'Package'
  }

  getZipCode(): string {
    return this.ToZipCode
  }
  getWeight(): number {
    return this.Weight
  }
}

export class Oversized implements Parcel {
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
  }: Parcel) {
    this.ShipmentID = ShipmentID
    this.ToAddress = ToAddress
    this.FromAddress = FromAddress
    this.ToZipCode = ToZipCode
    this.FromZipCode = FromZipCode
    this.Weight = Weight
    this.Type = 'Oversized'
  }

  getZipCode(): string {
    return this.ToZipCode
  }
  getWeight(): number {
    return this.Weight
  }
}

export class ShipmentFactory {
  static getShipment(client: any) {
    switch (true) {
      case client.Weight <= 15:
        return new Letter(client)
      case client.Weight > 15 && client.Weight <= 160:
        return new Package(client)
      default:
        return new Oversized(client)
    }
  }
}

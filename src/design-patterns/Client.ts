import { Shipment } from './Shipment'

export interface Client {
  ShipmentID: number
  ToAddress: string
  FromAddress: string
  ToZipCode: string
  FromZipCode: string
  Weight: number
  getWeight?: () => number
  getZipCode?: () => number | string
}

export class ClientBulder {
  private readonly _client: Client

  public static ShipmentID = 0

  constructor() {
    this._client = {
      ShipmentID: 0,
      ToAddress: '',
      FromAddress: '',
      ToZipCode: '',
      FromZipCode: '',
      Weight: 10,
      getZipCode() {
        return +this._client.ToZipCode[0]
      },
      getWeight() {
        return this._client.Weight
      },
    }
  }

  setShipmentID(ShipmentID?: number): ClientBulder {
    this._client.ShipmentID = ShipmentID || ClientBulder.ShipmentID++
    return this
  }

  setToAddress(toAddress: string): ClientBulder {
    this._client.ToAddress = toAddress
    return this
  }

  setFromAddress(fromAddress: string): ClientBulder {
    this._client.FromAddress = fromAddress
    return this
  }

  setToZipCode(toZipCode: string): ClientBulder {
    this._client.ToZipCode = toZipCode
    return this
  }

  setFromZipCode(fromZipCode: string): ClientBulder {
    this._client.FromZipCode = fromZipCode
    return this
  }

  setWeight(weight: number): ClientBulder {
    this._client.Weight = weight
    return this
  }

  makeRequest(client: Client): void {
    const shipment = Shipment.getInstance()
    shipment.setClient(client)
    shipment.makeShip()
  }

  build() {
    return {
      client: this._client,
      makeRequest: this.makeRequest,
    }
  }
}

const test = new ClientBulder()
  .setShipmentID()
  .setToZipCode('170')
  .setWeight(350)
  .build()

test.makeRequest(test.client)

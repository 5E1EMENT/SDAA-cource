import { Shipment } from './Shipment'
import { ShipmentBuilder } from './ShipmentBuilder'

export class Client {
  constructor(private shipment: Shipment) {}

  makeShip() {
    this.shipment.ship(this.shipment)
  }
}

const shipment = new ShipmentBuilder().build({
  ToAddress: 'California',
  FromAddress: 'New York',
  ToZipCode: '111222',
  FromZipCode: '111500',
  Weight: 60,
})

const test = new Client(shipment)
test.makeShip()

const shipment2 = new ShipmentBuilder().build({
  ToAddress: 'Chicago',
  FromAddress: 'Texas',
  ToZipCode: '555666',
  FromZipCode: '777888',
  Weight: 5,
})

const test2 = new Client(shipment2)
test2.makeShip()

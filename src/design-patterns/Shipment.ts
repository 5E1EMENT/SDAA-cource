let shipmentId = 0

export class Shipment {
  constructor(
    private ToAddress: string,
    private FromAddress: string,
    private ToZipCode: string,
    private FromZipCode: string,
    private Weight: number
  ) {
    shipmentId += 1
  }

  public getShipmentID() {
    return shipmentId
  }
}

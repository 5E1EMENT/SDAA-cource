import { Consumable } from './Consumable'

export class Pizza extends Consumable {
  private slicesEaten = 0
  constructor(private numberOfSlices: number, spoiled: boolean) {
    super('Pizza', 0, 0, spoiled)
  }

  private getSlicesEaten(): number {
    return this.slicesEaten
  }

  private getNumberOfSlices(): number {
    return this.numberOfSlices
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.increaseSlicesEaten(1)
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true)
      }

      return `You eat a slice of the ${this.getName()}. Slices eaten: ${
        this.slicesEaten
      })}`
    }
    return 'There is no pizza anymore'
  }

  increaseSlicesEaten(slicesEaten: number) {
    this.slicesEaten += slicesEaten
  }
}

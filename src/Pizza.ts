import { Consumable } from './Consumable'

export class Pizza extends Consumable {
  constructor(
    private numberOfSlices: number,
    spoiled: boolean,
    private slicesEaten: number,

    value = 3,
    name = 'Pizza',
    weight = 1
  ) {
    super(name, value, weight, spoiled)

    this.setConsumed(false)
    this.setSpoiled(spoiled)
  }

  private getSlicesEaten(): number {
    return this.slicesEaten
  }

  private getNumberOfSlices(): number {
    return this.numberOfSlices
  }

  public eat(): string {
    if (this.getSlicesEaten() < this.getNumberOfSlices()) {
      this.increaseSlicesEaten(1)
      if (this.getSlicesEaten() >= this.getNumberOfSlices()) {
        this.setConsumed(true)
      }

      return `You eat a slice of the ${this.getName()}. Slices eaten: ${this.getSlicesEaten()}`
    }
    return 'There is no pizza anymore'
  }

  increaseSlicesEaten(slicesEaten: number) {
    this.slicesEaten += slicesEaten
  }
}

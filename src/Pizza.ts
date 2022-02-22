import { Consumable } from './Consumable';

// your code goes here
export class Pizza extends Consumable {
  constructor(
    private numberOfSlices: number,
    spoiled: boolean,
    private slicesEaten: number,

    value: number = 3,
    name: string = 'Pizza',
    weight: number = 1,
  ) {
    super(name, value, weight, spoiled);

    this.setConsumed(false);
    this.setSpoiled(spoiled);
  }

  private getSlicesEaten(): number {
    return this.slicesEaten;
  }

  private getNumberOfSlices(): number {
    return this.slicesEaten;
  }

  public eat(): string {
    if (this.getSlicesEaten() < this.getNumberOfSlices()) {
      this.setSlicesEaten(1);
      if (this.getSlicesEaten() >= this.getNumberOfSlices()) {
        this.setConsumed(true);
      }

      return `You eat a slice of the ${this.getName()}. Slices eaten: ${this.getSlicesEaten()}`;
    }
    return 'There is no pizza anymore';
  }

  setSlicesEaten(slicesEaten: number) {
    this.slicesEaten += slicesEaten;
  }
}

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

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.setSlicesEaten(1);
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return `You eat a slice of the ${this.name}. Slices eaten: ${this.slicesEaten}`;
    }
    return 'There is no pizza anymore';
  }

  setSlicesEaten(slicesEaten: number) {
    this.slicesEaten += slicesEaten;
  }
}

import { Consumable } from './Consumable';

// your code goes here
export class Pizza extends Consumable {
  constructor(
    private numberOfSlices: number,
    protected spoiled: boolean,

    private slicesEaten: number,
    protected value: number = 3,
    protected name: string = 'Pizza',
    protected weight: number = 1,
    protected consumed: boolean = false,
  ) {
    super(value, name, weight, consumed, spoiled);
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten += 1;
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return 'You eat a slice of thi pizza';
    }
    return '';
  }
}

import { Item } from './Item';

// your code goes here
export class Consumable extends Item {
  constructor(
    protected value: number,
    protected name: string,
    protected weight: number,
    protected consumed: boolean = false,
    protected spoiled: boolean,
  ) {
    super(value, name, weight);
  }

  public use(): string {
    return !this.spoiled && !this.consumed
      ? this.eat()
      : this.consumed
      ? `There is nothing left of the ${this.name} to consume.`
      : '';
  }
  public eat(): string {
    return !this.spoiled
      ? `You eat the ${this.name}`
      : `You eat the ${this.name}. You feel sick.`;
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  public setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }
}

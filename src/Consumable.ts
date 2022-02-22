import { Item } from './Item';

// your code goes here
export class Consumable extends Item {
  protected consumed: boolean = false;
  protected spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.setSpoiled(spoiled);
  }

  public use(): string {
    return !this.isSpoiled() && !this.isConsumed()
      ? this.eat()
      : this.isConsumed()
      ? `There is nothing left of the ${this.getName()} to consume.`
      : '';
  }
  public eat(): string {
    return !this.isSpoiled()
      ? `You eat the ${this.getName()}`
      : `You eat the ${this.getName()}. You feel sick.`;
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

  public setSpoiled(spoiled: boolean) {
    this.spoiled = spoiled;
  }
}

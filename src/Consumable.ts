import { Item } from './Item'

export class Consumable extends Item {
  private consumed = false
  private spoiled: boolean

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight)

    this.setSpoiled(spoiled)
  }

  public use(): string {
    if (!this.isSpoiled() && !this.isConsumed()) {
      this.eat()
    } else if (this.isConsumed() && this.isSpoiled()) {
      return ''
    } else if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume.`
    }
  }
  public eat(): string {
    return !this.isSpoiled()
      ? `You eat the ${this.getName()}`
      : `You eat the ${this.getName()}. You feel sick.`
  }

  public isConsumed(): boolean {
    return this.consumed
  }

  public isSpoiled(): boolean {
    return this.spoiled
  }

  public setConsumed(consumed: boolean) {
    this.consumed = consumed
  }

  public setSpoiled(spoiled: boolean) {
    this.spoiled = spoiled
  }
}

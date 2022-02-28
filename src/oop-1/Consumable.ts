import { Item } from './Item'

export class Consumable extends Item {
  private consumed = false
  private spoiled: boolean

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight)

    this.setSpoiled(spoiled)
  }

  public use(): string {
    if (!this.consumed && !this.spoiled) {
      return this.eat()
    }
    return ''
  }

  public eat(): string {
    const spoiled = this.isSpoiled()

    if (!spoiled) {
      return `You eat the ${this.getName()}`
    } else {
      return `You eat the ${this.getName()}. You feel sick.`
    }
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

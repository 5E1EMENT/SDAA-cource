import { Item } from './Item'
import { toPercentage } from './utils'
export abstract class Weapon extends Item {
  static readonly MODIFIER_CHANGE_RATE: number = 0.05

  private baseDamage: number
  private damageModifier = 0
  private baseDurability: number
  private durabilityModifier = 0

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight)

    this.baseDamage = baseDamage
    this.baseDurability = baseDurability
  }

  abstract polish(): void

  protected getBaseDamage(): number {
    return this.baseDamage
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier
  }

  public getDamageModifier(): number {
    return this.damageModifier
  }

  protected setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier
  }

  protected setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier
  }

  protected getDurabilityModifier(): number {
    return this.durabilityModifier
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier
  }

  public toString(): string {
    return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Durability: ${toPercentage(
      this.getDurability()
    )}%`
  }

  public use(): string {
    const name = this.getName()
    const durability = this.getDurability()

    if (durability <= 0) {
      return `You can't use the ${name}, it is broken.`
    }

    const damage = this.getDamage()
    let message = `You use the ${name}, dealing ${damage} points of damage.`

    const newDurability = durability - Weapon.MODIFIER_CHANGE_RATE
    if (newDurability <= 0) {
      this.baseDurability = newDurability - this.durabilityModifier
      message += `The ${name} breaks.`
    }

    return message
  }
}

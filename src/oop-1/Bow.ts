import { Weapon } from './Weapon'

export class Bow extends Weapon {
  static readonly DUABILITY_LIMIT = 1

  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('Bow', baseDamage, baseDurability, value, weight)
  }

  polish(): void {
    const modifier = this.getDurabilityModifier()
    const newModifier = modifier + Weapon.MODIFIER_CHANGE_RATE
    const durability = this.getDurability() + newModifier
    const limit = durability < Bow.DUABILITY_LIMIT

    if (limit) {
      this.setDurabilityModifier(Weapon.MODIFIER_CHANGE_RATE)
    }
  }
}

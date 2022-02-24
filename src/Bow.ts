import { Weapon } from './Weapon'

export class Bow extends Weapon {
  static readonly DUABILITY_LIMIT = 1

  constructor(
    baseDamage: number,
    baseDurability: number,
    damageModifier: number,
    durabilityModifier: number,
    value = 2,
    weight = 5
  ) {
    const name = 'Bow'
    super(name, baseDamage, baseDurability, value, weight)

    this.setDamageModifier(damageModifier)
    this.setDurabilityModifier(durabilityModifier)
  }

  polish(): void {
    const limit = this.getDurabilityModifier() <= Bow.DUABILITY_LIMIT

    if (limit) {
      this.setDurabilityModifier(Weapon.MODIFIER_CHANGE_RATE)
    }
  }
}

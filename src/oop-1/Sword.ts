import { Weapon } from './Weapon'

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('Sword', baseDamage, baseDurability, value, weight)
  }

  polish(): void {
    const modifier = this.getDamageModifier()
    const newModifier = modifier + Weapon.MODIFIER_CHANGE_RATE
    const newDamage = this.getDamage() + newModifier
    const limit = this.getBaseDamage() * 0.25 + newDamage

    if (newDamage < limit) {
      this.setDamageModifier(Weapon.MODIFIER_CHANGE_RATE)
    }
  }
}

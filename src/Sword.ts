import { Weapon } from './Weapon'

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    damageModifier: number,
    durabilityModifier: number,
    value = 1,
    weight = 10
  ) {
    const name = 'Sword'
    super(name, baseDamage, baseDurability, value, weight)
    this.setDamageModifier(damageModifier)
    this.setDurabilityModifier(durabilityModifier)
  }

  polish(): void {
    const limit = this.getBaseDamage() * 0.25 + this.getBaseDamage()

    if (this.getDamageModifier() < limit) {
      this.setDamageModifier(Weapon.MODIFIER_CHANGE_RATE)
    }
  }
}

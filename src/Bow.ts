import { Weapon } from './Weapon';

// your code goes here
export class Bow extends Weapon {
  protected static readonly DUABILITY_LIMIT = 1;

  constructor(
    baseDamage: number,
    damageModifier: number,
    baseDurability: number,
    durabilityModifier: number,

    name: string = 'Bow',
    value: number = 2,
    weight: number = 5,
  ) {
    super(name, baseDamage, baseDurability, value, weight);

    this.setDamageModifier(damageModifier);
    this.setDurabilityModifier(durabilityModifier);
  }

  polish(): void {
    const limit = this.getDurabilityModifier() <= Bow.DUABILITY_LIMIT;

    if (limit) {
      this.updateDurabilityModifier();
    }
  }

  getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  updateDurabilityModifier(): void {
    this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
  }
}

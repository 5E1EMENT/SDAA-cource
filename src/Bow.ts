import { Weapon } from './Weapon';

// your code goes here
export class Bow extends Weapon {
  protected static readonly DUABILITY_LIMIT = 1;

  constructor(
    baseDamage: number,
    damageModifier: number,
    baseDurability: number,
    durabilityModifier: number,

    value: number = 2,
    weight: number = 5,
    name: string = 'Bow',
  ) {
    super(
      baseDamage,
      damageModifier,
      baseDurability,
      durabilityModifier,
      value,
      name,
      weight,
    );
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

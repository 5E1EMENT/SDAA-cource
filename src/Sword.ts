import { Weapon } from './Weapon';

// your code goes here
export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    damageModifier: number,
    baseDurability: number,
    durabilityModifier: number,

    value: number = 1,
    weight: number = 10,
    name: string = 'Sword',
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
    const limit = this.baseDamage * 0.25;
    if (this.damageModifier < limit) {
      this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}

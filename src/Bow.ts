import { Weapon } from './Weapon';

// your code goes here
export class Bow extends Weapon {
  constructor(
    protected baseDamage: number,
    protected damageModifier: number,
    protected baseDurability: number,
    protected durabilityModifier: number,

    protected value: number = 2,
    protected weight: number = 5,
    protected name: string = 'Bow',
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
    const limit = this.durabilityModifier <= 1;

    if (limit) {
      this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}

import { Weapon } from './Weapon';

// your code goes here
export class Sword extends Weapon {
  constructor(
    protected baseDamage: number,
    protected damageModifier: number,
    protected baseDurability: number,
    protected durabilityModifier: number,

    protected value: number = 1,
    protected weight: number = 10,
    protected name: string = 'Sword',
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

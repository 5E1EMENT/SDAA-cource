import { Item } from './Item';

// your code goes here
export abstract class Weapon extends Item {
  protected static readonly MODIFIER_CHANGE_RATE: number = 0.05;
  private numberOfUses: number = 1;

  protected baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  abstract polish(): void;

  protected getBaseDamage(): number {
    return this.baseDamage;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDamageModifier(): number {
    return this.damageModifier;
  }

  protected setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier;
  }

  protected setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier;
  }

  protected getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public getDurability(): number {
    return +(
      this.baseDurability +
      this.durabilityModifier -
      Weapon.MODIFIER_CHANGE_RATE * this.numberOfUses
    ).toFixed(3);
  }

  public toString(): string {
    return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Durability: ${this.getDurability()}%`;
  }

  private checkPreviousUsageWithEmptyDurability(): boolean {
    const prevNumbersOfUsage = this.numberOfUses - 1;
    if (this.getDurability() - prevNumbersOfUsage <= 0) {
      return false;
    }
    return true;
  }

  public use(): string {
    if (this.checkPreviousUsageWithEmptyDurability()) {
      this.numberOfUses += 1;
      const isWeaponBroken = this.getDurability() <= 0;
      const brokenMessage = isWeaponBroken
        ? `The ${this.getName()} breaks`
        : '';

      return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. ${brokenMessage}`;
    }

    return `You can't use the ${this.getName()}, it is broken.`;
  }
}

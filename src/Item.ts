import { Comparable } from './Comparable';

let counter = 0;

export abstract class Item implements Comparable<Item> {
  private id:number = 0;

  constructor(
    protected value: number,
    protected name: string,
    protected weight: number,
  ) {
    counter += 1;
    this.id = counter;
  }

  public use(): void {}

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setValue(value: number): void {
    this.value = value;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setWeight(weight: number): void {
    this.weight = weight;
  }

  public compareTo(other: Item): number {
    const otherName = other.getName();

    return this.value > other.value
      ? 1
      : this.name === otherName
      ? this.name.localeCompare(otherName)
      : -1;
  }

  static get numberOfItems(): number {
    return counter;
  }

  static reset(): void {
    counter = 0;
  }
}

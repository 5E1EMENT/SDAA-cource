import { Comparable } from './Comparable'

let counter = 0

export abstract class Item implements Comparable<Item> {
  private id = 0
  private value: number
  private name: string
  private weight: number

  constructor(name: string, value: number, weight: number) {
    counter += 1
    this.id = counter
    this.name = name
    this.value = value
    this.weight = weight
  }

  abstract use(): void
  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
  }

  public getId(): number {
    return this.id
  }

  public getValue(): number {
    return this.value
  }

  public getName(): string {
    return this.name
  }

  public getWeight(): number {
    return this.weight
  }

  public setValue(value: number): void {
    this.value = value
  }
  public setName(name: string): void {
    this.name = name
  }
  public setWeight(weight: number): void {
    this.weight = weight
  }

  public compareTo(other: Item): number {
    const otherName = other.getName().toLowerCase()
    const currentName = this.getName().toLowerCase()
    const otherValue = other.getValue()

    if (this.value > otherValue) {
      return 1
    } else if (this.value < otherValue) {
      return -1
    } else {
      return currentName.localeCompare(otherName)
    }
  }

  static get numberOfItems(): number {
    return counter
  }

  static reset(): void {
    counter = 0
  }
}

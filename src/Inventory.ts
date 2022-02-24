import { Item } from './Item'
import { ItemComparator } from './ItemComparator'
import { ItemWeightComparator } from './ItemWeightComparator'

export class Inventory {
  private items: Item[] = []

  public addItem(item: Item): void {
    this.items.push(item)
  }

  public sort(comparator?: ItemComparator): void {
    if (!comparator) {
      this.items.sort((a: Item, b: Item) => {
        const aValue = a.getValue()
        const bValue = b.getValue()

        return aValue - bValue
      })

      return
    }

    const comporatorWeight = new ItemWeightComparator()

    this.items.sort((a: Item, b: Item) => {
      return comporatorWeight.compare(a, b)
    })
  }

  public toString(): string {
    return this.items.join(', ')
  }
}

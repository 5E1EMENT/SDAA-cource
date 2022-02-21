import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item) {
    const firstItemWeight = first.getWeight();
    const secondItemWeight = second.getWeight();

    return firstItemWeight > secondItemWeight
      ? 1
      : firstItemWeight === secondItemWeight
      ? first.compareTo(second)
      : -1;
  }
}

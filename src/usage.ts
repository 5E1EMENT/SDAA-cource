import { Inventory } from './Inventory'
import { Sword } from './Sword'
import { Pizza } from './Pizza'
import { ItemWeightComparator } from './ItemWeightComparator'
import { Bow } from './Bow'
// Create the inventory
const inventory: Inventory = new Inventory()

// Create a set of items
const a: Sword = new Sword(30.4219, 0.7893, 300, 2.032)
const b: Sword = new Sword(40, 0.7893, 200, 2)
const c: Sword = new Sword(40, 1, 100, 3)
const d: Bow = new Bow(50, 1, 60, 3)
const pizza: Pizza = new Pizza(12, false, 3)

console.log(c.getId())
console.log(pizza.getId())

// Add the items to the inventory
inventory.addItem(a)
inventory.addItem(b)
inventory.addItem(c)
inventory.addItem(pizza)

// Display the inventory
console.log(inventory.toString())

// Sort by natural order
inventory.sort()

// Display the new inventory
console.log(inventory.toString())

// Sort by weight
inventory.sort(new ItemWeightComparator())

// Display the inventory again
console.log(inventory.toString())

// Use the sword
console.log(a.use())
console.log(a.use())
// Use the sword
console.log(a.use())
console.log(a.use())
// Use the sword
console.log(a.use())
console.log(a.use())
console.log(a.use())
// Use the bow
console.log(d.use())
console.log(d.use())
console.log(d.use())

console.log(a.polish())
console.log(a.polish())
console.log(a.polish())
console.log(a.polish())

// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());
// console.log(pizza.eat());

let inventory = [
  { id: 1, item: "Pen", stock: 100, price: 2 },
  { id: 2, item: "Notebook", stock: 50, price: 20 },
  { id: 3, item: "Bag", stock: 0, price: 50 }
];

let arrMap = inventory.map(arr => ({
  ...arr,
  value: arr.stock * arr.price
}))
console.log(arrMap)

let arrForEach = inventory.forEach(arr => {
  let val = arr.stock * arr.price
  console.log(`ID: ${arr.id} Item:${arr.item}
    Value:${val}`)
})

let totalValue = function (inventory) {
  let sum = 0;
  for (let i = 0; i < inventory.length; i++) {
    sum += inventory[i].stock * inventory[i].price

  }
  return sum;

}
let calculatesTotalStock = totalValue(inventory)
console.log(calculatesTotalStock)


let applyBulkDiscount = function (inventory, threshold, percent) {

  let totalValue = 0
  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].stock * inventory[i].price
  }

  if (totalValue > threshold) {
    let dicArr = inventory.map(arr => {
      dicPrice = arr.price - (arr.price * percent / 100)
      return { ...arr, price: dicPrice }
    })
    return dicArr;
  }
}
let sampleArgument = applyBulkDiscount(inventory, 100, 5)
console.log(sampleArgument)

let filterStock = inventory.filter(arr => {
  if (arr.stock === 0) {
    return arr
  }
})
console.log(filterStock)

sampleArgument.forEach(arr => {
  console.log(`Item${arr.item} Price${arr.price}`)
})
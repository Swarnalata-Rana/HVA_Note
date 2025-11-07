class ShoppingItem{
  constructor(id, name, quantity, purchased, tags){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.purchased=purchased;
    this.tags=tags;
  }

}

let shoppingList = [];

let addItem=function(...items){
  for (let i=0; i<items.length; i++){
    shoppingList.push(items[i])
  }
  return shoppingList
}

const arr1=new ShoppingItem(1, "chinu", 2, true, 
["grocery", "stationery"])

const arr2=new ShoppingItem(2, "ramya", 5, false, 
["grocery", "stationery"])

let addArr=addItem(arr1,arr2)
console .log(addArr)

console.log("hello...........")

let togglePurchased=function(id){

  for(let i=0; i<shoppingList.length; i++){

    if(shoppingList[i].id===id){
     shoppingList[i].purchased=!shoppingList[i].purchased

    }

  }
  return shoppingList;

}
let toggleP=togglePurchased(2)
console.log(toggleP)

console.log("hello...........")

const updates = {id:1, name: "payel", quantity: 10, purchased: false };

let updateItem=function(id, updates){

  for(let i=0; i<shoppingList.length; i++){
    if(shoppingList[i].id===id){
      for(let key in updates){
         if (['name', 'quantity', 'purchased', 'tags'].includes(key)) {
            shoppingList[i][key]=updates[key]

         }
      }
      return shoppingList[i];
    }
  }
}

let updatesEle=updateItem(1, updates)
console.log(updatesEle)

console.log("hello...........")

let removeItem=function(id){

  let shoppingListArr=shoppingList.filter(arr=>{
    if(arr.id !==id){
      return true
    }
  })
  return shoppingListArr

}
let removeEle=removeItem(1)
console.log(removeEle)

console.log("hello...........")

let listUnpurchased=function(){
  let l =shoppingList.filter(arr=>{
    // return arr.purchased === false;
    if(arr.purchased===false){
      return arr
    }
  })
  return l;
}
let notPurchesed=listUnpurchased()
console.log(notPurchesed)

console.log("hello...........")


let printList=function(){

  shoppingList.forEach(arr=>{
    console.log(`name:${arr.name}, quantity:${arr.quantity}, purchased:${arr.purchased}`)
  })

}
printList()
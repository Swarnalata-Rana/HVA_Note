let cart = [ { item: "Pen", quantity: 2, price: 5, inStock: true } ];

let wishlist = [
  { item: "Notebook", quantity: 1, price: 20, inStock: true },
  { item: "Bag", quantity: 1, price: 50, inStock: false }
];

let filterCart2=wishlist.filter(arr=>{
  if(arr.inStock===true){
    return arr
  }
})
console.log(filterCart2)

let cart2=[...cart,...filterCart2]


let filterArr=cart2.filter(arr=>{
  if(arr.quantity>0 && arr.price>0){
    return arr
  }
})
console.log(filterArr)


let arrMap=filterArr.map(arr=>({
  item:arr.item,
  total:arr.quantity*arr.price
  
}))
console.log(arrMap)

let arrForeach=arrMap.forEach(arr=>{
  console.log(arr)
})

let filterWishilist=wishlist.filter(arr=>{
  if(arr.inStock===false){
    return arr
  }
})
console.log(filterWishilist)
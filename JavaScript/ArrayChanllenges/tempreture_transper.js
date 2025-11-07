let celsius = [20, 30, 40, 15, 25, 35];

let f=celsius.map(arr=>{
   return (arr*9/5)+32
 
})
console.log(f)

let filter=f.filter(arr=>{
    if(arr>86){
      return arr
    }
})
console.log(filter)

let f2=filter.forEach(arr=>{
    console.log(arr)
})
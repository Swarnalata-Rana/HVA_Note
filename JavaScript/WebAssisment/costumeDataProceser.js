// let array1=[1,2,3,4]
// let array2=[1,2,3,4,5,6]

// function processData(data, operationFn) {
//   let i=0
//   while(i<data.length){
//     if(data.length<=5){
//       return data;
//     }
//     else if(data.length>5){
//         console.log(data)
//         console.log("--------------------")
//       return operationFn(data[i]);
//     }
//   }
//   i++
  
// }

// let operationFn=function(data){
// return data
// }  

// let squareNumbers=function(data){
//   let m=data*2
//   return m;
// }
// let rsl=array2.map(squareNumbers)
// console.log(rsl)


// let filterEvens=function(data){
//  let e=data%2==0;
//  return e;
// }

// let sumNumbers=function(data){
//     return data;
  
// }

// console.log(processData(array1, operationFn));
// console.log(processData(array2,operationFn(squareNumbers)))
// console.log(processData(array2,operationFn(filterEvens)))
// console.log(processData(array2,operationFn(sumNumbers)))


// console.log(processData(array2,squareNumbers))

// console.log(processData)
// -----------------------------------------


let array1=[1,2,3,4]
let array2=[1,2,3,4,5,6]

function processData(data, operationFn){
    if(data.length>5){
        return operationFn(data)
    }
    else{
        return data
    }
}

let squareNumbers=function(arry){
   let mul=arry.map(function(arryOfNum){
       return arryOfNum*2
   })
  return mul
}

let filterEven=function(arry){
    let even=arry.filter(function(evenNum){
        return evenNum%2==0;
    })
    return even;
}

let sumNumbers=function(array){
    let sum=array.reduce(function(sumStat,sumNextNum){
        return sumStat+sumNextNum
    })
    return sum
}

console.log(processData(array1,squareNumbers ))
console.log(processData(array2,squareNumbers ))

console.log(processData(array1,filterEven ))
console.log(processData(array2,filterEven ))

console.log(processData(array1,sumNumbers ))
console.log(processData(array2,sumNumbers ))
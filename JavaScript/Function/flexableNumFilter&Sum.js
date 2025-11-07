function filterAndSumNumbers(start, end, callback){

    let sum=0
  
    while(start<=end){
  
      if(callback(start)){
        sum=sum+start
      }
      start=start+1
  
    }
  
    return sum;
  
  }
  
  let conditionCallback=function(num){
    return num%2==0
  }
  let isEven = 
  filterAndSumNumbers(1, 100, conditionCallback) 
  console.log(isEven)
  
  let conditionCallback1=function(num){
    return num%2 !=0;
  }
  let idOdd=filterAndSumNumbers(1, 50, conditionCallback1)
  console.log(idOdd)
  
  let conditionCallback2=function(num){
    return Number.isInteger(Math.sqrt(num))
  }
  let isPerfectSquare=filterAndSumNumbers(1,200,conditionCallback2)
  console.log(isPerfectSquare)
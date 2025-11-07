let gradebook = [
    { name: "Ali", scores: [30, 50, 40] },
    { name: "Sara", scores: [80, 90, 70] },
    { name: "Ravi", scores: [20, 25, 30] }
  ];
  let gradebook1 = [
    { name: "Runu", scores: [30, 50, 40] },
    { name: "Subha", scores: [80, 90, 70] },
    { name: "Chinu", scores: [20, 25, 30] }
  ];
  
  
  let average=function(scores){
    let i=0
    let sum=0
    while(i<scores.length){
      sum=sum+scores[i]
      i++
    }
    return (sum/scores.length)
  }
  console.log(average(gradebook[0].scores))
  console.log(average(gradebook[1].scores))
  console.log(average(gradebook[2].scores))
  
  let avgMap=gradebook.map(arr=>({
  
    name:arr.name,
    avg:average(arr.scores),
    status:average(arr.scores)>=40?"Pass":"Fail"
  
  }))
  console.log(avgMap)
  
  let filterPass=avgMap.filter(arr=>{
  
    if(arr.status==="Pass"){
      return arr
    }
  
  })
  console.log(filterPass)
  
  let summaryForEach=filterPass.forEach(arr=>{
  
    console.log(arr)
  
  })
  
  let mergeGradebooks=function(...books){
      let emptyArr=[]
      for(let i=0; i<books.length; i++){
        for(let j=0; j<books[i].length; j++){
          emptyArr.push(books[i][j])
        }
      }
      return emptyArr;
  }
  
  let mergeArr=mergeGradebooks(gradebook,gradebook1)
  console.log(mergeArr)
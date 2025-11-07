
let students=[
    {name:"Asha", math:85, science:90, english:80},
    {name:"Ravi", math:60, science:55, english:65},
    {name: "Nina",math:75, science:70, english:78}
  ]
  
  function printGrades(students){
    let sum=0
    let avg=0
    let grade=' '
    students.forEach(arr=>{
  
      sum=arr.math+arr.science+arr.english
      avg=sum/3
  
      if(avg>=80){
        grade='A'
      }
      else if(avg >= 60 && avg < 80){
        grade= 'B'
      }
      else {
        grade='C'
      }
  
      console.log(arr.name + "-Grade " + grade)
    })
  }
  printGrades(students)
let students=[
    {name:"Ali", age:20, courses:["Math", "Science"]},
    {name:"Sara", age:21, courses:["Web Dev", "UI/UX", "English"]},
    {name:"John", age:22, courses:["Math"]}
  ]
  
  function identifyUnderEnrolledStudents(students){
  
    let mapArr=students.map(arr=>{
      return {name:arr.name,
      courses:arr.courses.length
      }
    })
    let a=mapArr
    console.log(a)
  
    let filterArr=a.filter(arr=>{
      if(arr.courses <= 2){
        return arr.name
      }
  
    })
    let b=filterArr
    console.log(b)
    
    b.forEach(arr=>{
      console.log(arr.name)
    })
  
  }
  identifyUnderEnrolledStudents(students)
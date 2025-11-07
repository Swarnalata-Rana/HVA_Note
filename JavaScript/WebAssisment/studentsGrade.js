const students=[
    {
    name:"Alice",
    subject:[
      {
        subject:"Math", marks:85
      },
      {
        subject:"Science", marks:90
      },
      {
        subject:"History", marks:78
      }
    ]
  },
  
  {
    name:"John",
    subject:[
      {subject:"Math", marks:87
      },
      {
        subject:"Science",marks:65
      },
      {
        subject:"History", marks:90
      }
    ]
  },
  
  {
    name:"Micle",
    subject:[
      {subject:"Math", marks:89
      },
      {subject:"Science",marks:87
      },
      {
        subject:"History",marks:98
      }
    ]
   }
  ];
  
  const avgArry=students.map(student=>{
      const total=student.subject.reduce((sum, sub)=>sum+sub.marks,0)
      const avg=total/student.subject.length;
      return {name:student.name, average:avg}
  })
  console.log(avgArry)
  console.log("---------------------------")
  
  
  const filterArray = students.filter(student => {
      let score = true;
      for (let i = 0; i < student.subject.length; i++) {
          if (student.subject[i].marks < 80) {
              score = false;
              break;
          }
      }
      return score;
  });
  console.log(filterArray);
  console.log("---------------------------") 
  
//   console.log(JSON.stringify(filterArray));
  
  console.log("---------------------------")
  students.forEach(student=>{
      console.log(`Student: ${student.name}`)
      student.subject.forEach(subj=>{
          console.log(` ${subj.subject}: ${subj.marks}`)
      })
  })
  
  
  
  
  
  
  
  
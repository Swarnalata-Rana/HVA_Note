let books=[
    {title:"The Blue Umbrella" , author: "Ruskin Bond", ratings:[5,4,5,5,4]},
    {title:"The White Tiger" , author: "Aravind Adiga", ratings:[3,3,4]},
    {
      title:"Swami and Friends", author:"R. K. Narayan", ratings:[4, 5, 5,4]
    }
  ]
  
  function getTopRatedBooks(books){
  
    let mapArr=books.map(arr=>{
  
      let sum=arr.ratings.reduce((a,b)=>{
        return a+b
      },0)
      let avg=sum/arr.ratings.length
  
      return{
        title:arr.title,
        author:arr.author,
        average:avg
      }
  
    })
  
    let filterArr=mapArr.filter(arr=>{
      if(arr.average>=4.0){
        return true
      }
    })
  
    filterArr.forEach(arr=>{
      console.log(arr.title +" by " + arr.author + " - Avg Rating: " +arr.average)
    })
  }
  getTopRatedBooks(books)
  
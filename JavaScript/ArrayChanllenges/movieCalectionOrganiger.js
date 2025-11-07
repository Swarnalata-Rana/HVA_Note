let movies = [
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "Dunkirk", year: 2017, rating: 7.9 }
  ];
  
  let moviesMap=movies.map(arr=>{
    return arr.title
  
  })
  console.log(moviesMap)
  
  let filterMap=movies.filter(arr=>{
    if(arr.year>2010){
      return arr
    }
  })
  console.log(filterMap)
  
  let dispaly=movies.forEach(arr=>{
    console.log(`${arr.year}, ${arr.rating}`)
  })
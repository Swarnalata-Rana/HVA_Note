let countVowels=function(text){

    let c=0
    let vowels='aeiou'
    let lowerTest=text.toLowerCase()
  
    for(let i=0; i<lowerTest.length; i++){
      if (vowels.includes(lowerTest[i])){
        c++
      }
    }
    return c
  
  }
  console.log(countVowels("Hello World")); 
  console.log(countVowels("JAVASCRIPT")); 
  console.log(countVowels("sky"));
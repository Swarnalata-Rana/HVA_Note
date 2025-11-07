function wordFrequency(text){

    let convert=text.toLowerCase()
    // console.log(convert)
  
    let words=convert.split(" ")
    // console.log(words)
  
    let obj={}
    
  
    for(let i=0; i<words.length; i++){
  
      let word=words[i]
  
      if(obj[word]){
        obj[word]+=1
      }
      else{
        obj[word]=1
      }
      }
      return obj;
    
  }
  let a = wordFrequency("This is a test. This test is fun"); 
  let b = wordFrequency("Apple apple banana");
  console.log(a);
  console.log(b);
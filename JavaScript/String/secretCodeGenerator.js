function secretCode(message){
    let uprCase = message.toUpperCase()
    // return uprCase
    let num = "";
    for (let i=0; i<uprCase.length; i++){
      if(uprCase[i]==="A"){
        num=num+"1"
      }
      else if(uprCase[i]==="E"){
         num=num+"2"
      }
       else if(uprCase[i]==="I"){
        num=num+"3"
      }
       else if(uprCase[i]==="O"){
        num=num+"4"
      }
       else if(uprCase[i]==="U"){
        num=num+"5"
      }
      else{
        num = num + uprCase[i];
      }
    }
    return num;
  }
  console.log(secretCode("hello world"));
  console.log(secretCode("JavaScript"));
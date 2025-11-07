function isPalindrome(text){
    let new_text = text.toLowerCase().split(' ').join('');
   console.log(new_text);
   for (let i = 0; i <new_text.length/2; i++){
     if (new_text[i] !== new_text[new_text.length - 1 - i]){
       return false;
     }
   }
   return true;
 }
 
 let result1 = isPalindrome("Race car"); 
 let result2 = isPalindrome("Madam"); 
 let result3 = isPalindrome("Hello");
 console.log(result1);
 console.log(result2);
 console.log(result3);
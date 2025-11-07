let blueprint={a:"number", b:"boolean"}
let givenObject={a:1, b:true}
function validateObject(obj1,obj2){
for(let key in obj1){
  if(typeof obj2[key]!==obj1[key]){
    return false
  }
}
return true

}
console.log(validateObject(blueprint,givenObject))
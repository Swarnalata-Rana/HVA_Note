let operations={
    add:function(a,b){
      return a+b
    },
    sub:function(a,b){
      return a-b
    },
    mul:function(a,b){
      return a*b
    },
    div:function(a,b){
      if(b===0){
        return null
      }
      return a/b
    }
  }
  
  function calculate(ops, opKey, a, b){
  
  var same = ops && ops[opKey];
  
  if (typeof same === "function") {
      return same(a, b);
    }
    return null;
  }
  
  console.log(calculate(operations, "add", 10,5))
  
  // console.log(calculate(operations, "sub", 10,5))
  
  console.log(calculate(operations, "mul", 3,5))
  
  console.log(calculate(operations, "pow", 10,0))
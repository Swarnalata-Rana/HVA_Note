function convertServicCost(calculateCost, convertCurrency, hours){

    let usdCost=calculateCost(hours)
    let currancyCost=convertCurrency(usdCost)
    
    return currancyCost;
    }
    
    let calculateDesignerCost=function(hours){
    return hours*30
    }
    let calculateDeveloperCost=function(hours){
      return hours*50
    }
    let calculateProductManagerCost=function(hours){
    return hours*70
    }
    
    let convertDollarToRupees=function(amount){
      return  amount*83
    }
    
    let convertDollarToEuros=function(amount){
      return amount*92
    }
    
    let convertDollarToYen=function(amount){
      return amount*150
    }
    
    let costRupees=convertServicCost(calculateDeveloperCost, convertDollarToRupees, 5)
    
    let costYen=convertServicCost(calculateDesignerCost,convertDollarToYen, 8)
    
    let costEuros=convertServicCost(calculateProductManagerCost, convertDollarToEuros, 3)
    
    console.log(costRupees)
    console.log(costEuros)
    console.log(costYen)
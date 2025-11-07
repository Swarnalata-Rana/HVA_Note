function calculateFinalPrice(amount, customDiscount){
    let discount=customDiscount(amount)
    let totalAmount=amount-discount
    return totalAmount;
}
function customDiscount(amount){
    if (amount<500){
        return 0;
    }
    else if(amount >=500 && amount<=999){
        return amount*0.1 
    }
    else if (amount >=1000 && amount<=1499){
        return amount*0.15
    }
    else if (amount>=1500 && amount<=1999){
        return amount*0.2
    }
    else {
        return amount*0.25
    }
}
let billAmount=[300,750,1200,1800,2500]
let i=0
let finallAmount=0
while(i<billAmount.length){
    finallAmount=(calculateFinalPrice(billAmount[i],customDiscount))
    console.log(finallAmount)
    i++
}
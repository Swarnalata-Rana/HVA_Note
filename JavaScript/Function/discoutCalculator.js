function calculateFinalPrice(amount, customDiscount){
    let discount=customDiscount(amount)
    let totalAmount=amount-discount
    return totalAmount;
}
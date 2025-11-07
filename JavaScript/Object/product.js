class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    discount(percent) {
        this.price = this.price - (this.price * percent) / 100;
        return this;
    }
    tax(percent) {
        this.price = this.price + (this.price * percent) / 100;
        return this;
    }
}
let p1 = new Product("Bag", 2000)

p1.discount(10).tax(5)
console.log(p1.price)
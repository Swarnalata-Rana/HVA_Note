class Product {
    constructor(name, category, price, stock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }

    getInfo() {
        console.log(`${this.name} (${this.category}) - Rs.${this.price} | Stock: ${this.stock}`);
    }


    isLowStock() {
        if (this.stock < 5) {
            return true
        }
        else {
            return false
        }
    }
}

class InventoryManager {

    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
        // console.log(product)

    }

    listLowStock() {
        let f = this.products.filter(arr => arr.isLowStock())
        // console.log(f)
        return f
    }

    calculateTotalValue() {
        let mapArr = this.products.map(arr => {
            return arr.price * arr.stock
        })

        let total_V = 0
        mapArr.forEach(arr => {
            total_V = total_V + arr
        })
        return total_V
    }

    // calculateTotalValue() {
    //     let total_V = 0
    //     this.products.forEach(arr => {
    //         total_V = total_V + arr.price * arr.stock
    //         // console.log(total_V)

    //     })
    //     return total_V
    // }

    printReport() {
        this.products.forEach(arr => {
            arr.getInfo()
        })
        console.log("Total Inventory Value: Rs. " + this.calculateTotalValue())
        console.log("Low Stock Items: " + this.listLowStock().length)

    }
}



let product1 = new Product("Notebook", "Stationery", 80, 10)

let product2 = new Product("Pen", "Stationery", 10, 4)

let product3 = new Product(" Perfume", "Personal Care ", 500, 2)

let store = new InventoryManager();
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.printReport()
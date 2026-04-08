class Product {
    productId: number
    name: string
    price: number
    inStock: boolean
    // return productCost * taxRate
    
    
    constructor(productId: number, name: string, price: number, inStock: boolean = true) {
        this.productId = productId
        this.name = name
        this.price = price
        this.inStock = inStock
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price}`
    }

    getPriceWithDiscount(discount: number): number {
        return this.price * (1 - discount)

    }
    


}

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

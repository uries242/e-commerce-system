import { Product } from "../models/Product.js";

function calculateTax(product: Product) {
    if (product.category === 'groceries') {
        return `Dollar amount taxed is: $${product.price * 0.03}`
    }
    else {
        return `Dollar amount taxed is: $${product.price * 0.0475}`
    }
}


const testProduct2 = new Product(30, 'Kiwi', "groceries", 100, 10, true)
console.log(calculateTax(testProduct2));
// npx tsx src/utils/taxCalculator.ts
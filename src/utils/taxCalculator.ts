import { Product } from "../models/Product.js";

function calculateTax(product: Product): number {
    if (product.category === 'groceries') {
        return product.price * 0.03
    }
    else {
        return product.price * .0475
    }
}

// function calculateDiscount(product: Product) {
//     return `The cash discount of this item is: $${product.price *  (product.discountPercentage / 100)}`
// }

import {Product} from '../models/Product.js'


function calculateDiscount(product: Product) {
    return `The cash discount of this item is: $${product.price *  (product.discountPercentage / 100)}`
}



// const testProduct = new Product(30, 'Kiwi', 100, 10, true)
// console.log(calculateDiscount(testProduct));

// fetch('https://dummyjson.com/products/')
// .then(res => res.json())
// .then(console.log);
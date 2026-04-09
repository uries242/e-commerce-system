import { Product } from './models/Product.js'
import { calculateDiscount } from './utils/discountCalculator.js'
import { calculateTax } from './utils/taxCalculator.js'
import { fetchProductData } from './services/apiService.js'

async function main() {
    const products = await fetchProductData()

    products.forEach(function(item: any) {
        const product = new Product(item.id, item.title, item.category, item.price, item.discountPercentage, item.stock > 0)
        
        console.log(product.displayDetails())
        console.log('It is discounted by: $' + calculateDiscount(product).toFixed(2))
        console.log('The tax amount is: $' + calculateTax(product).toFixed(2))
        console.log('The price after the discount is: $' + product.getPriceWithDiscount().toFixed(2))
        console.log("---------------------------------");
    })
}

main()

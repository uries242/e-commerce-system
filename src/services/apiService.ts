import { AppError } from '../utils/errorHandler.js'


async function fetchProductData() {
    try {
        const response = await fetch("https://dummyjson.com/products")
        if (!response.ok) {
            throw new AppError('Product not found', 404)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        if (error instanceof AppError) {
            console.error('App Error:', error.message, error.statusCode)
        } else {
            console.error('Unknown Error:', error)
        }
    }
}

fetchProductData()

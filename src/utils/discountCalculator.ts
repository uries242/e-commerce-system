import { Product } from "../models/Product.js";

export function calculateDiscount(product: Product) {
  return product.price * (product.discountPercentage / 100);
}

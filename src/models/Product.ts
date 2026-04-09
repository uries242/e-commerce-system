export class Product {
  productId: number;
  title: string;
  category: string
  price: number;
  discountPercentage: number;
  inStock: boolean;

  constructor(
    productId: number,
    title: string,
    category: string,
    price: number,
    discountPercentage: number,
    inStock: boolean = true,
  ) {
    this.productId = productId;
    this.title = title;
    this.category = category; 
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.inStock = inStock;
  }

  displayDetails(): string {
    return `${this.title} costs $${this.price}`;
  }

  getPriceWithDiscount(): number {
    return this.price * (1 - this.discountPercentage / 100);
  }
}

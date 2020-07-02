import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productid: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (let productid in itemsMap) {
      let item = itemsMap[productid];
      this.items.push(new ShoppingCartItem({ ...item, id: productid }));
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.id];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (let productid in this.items)
      sum += this.items[productid].totalPrice;
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productid in this.itemsMap)
      count += this.itemsMap[productid].quantity;
    return count;
  }
}
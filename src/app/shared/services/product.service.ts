import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProduct = new Subject<Product>();
  $newProduct = this.newProduct.asObservable();

  constructor() { }

  createProduct(product: Product) {
    this.newProduct.next(product);
  }
}

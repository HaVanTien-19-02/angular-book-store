import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { products } from 'src/app/shared/mock-data/product-list';
import { Product } from 'src/app/shared/models/product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() productId: string;

  product: Product;

  constructor(private storeService: StoreService) { }

  ngOnChanges(productId: {previousValue, currentValue, firstChange}) {
    this.product = products.find(ele => ele.$key === this.productId);
  }

  ngOnInit(): void {
    this.storeService.selectedProductId$.subscribe(pid => {
      this.product = products.find(ele => ele.$key === pid);
    });
  }

  handleChangedQuantity(quantity) {
    console.log(quantity);
  }

}

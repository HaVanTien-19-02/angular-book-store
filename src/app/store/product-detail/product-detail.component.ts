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
  @Input() productid: string;

  product: Product;

  constructor(private storeService: StoreService) { }

  ngOnChanges(productid: {previousValue, currentValue, firstChange}) {
    this.product = products.find(ele => ele.id === this.productid);
  }

  ngOnInit(): void {
    this.storeService.selectedProductid$.subscribe(pid => {
      this.product = products.find(ele => ele.id === pid);
    });
  }

  handleChangedQuantity(quantity) {
    console.log(quantity);
  }

}

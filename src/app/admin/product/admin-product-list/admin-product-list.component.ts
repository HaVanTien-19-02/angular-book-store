import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/shared/models/product';

import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  
  products: Product[] = [];
  subscription: Subscription;

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => this.products = result);
  }
  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
  viewDetail(p): void {
    this.router.navigate(['product', p.id], { relativeTo: this.route });
  }

  showAddForm() {
    this.router.navigate(['product', 'new'], { relativeTo: this.route });
  }

  editProduct(product: Product) {
    this.router.navigate(['product', product.id, 'edit'], { relativeTo: this.route });
  }

  deleteProduct(product: Product) {
    const res = confirm('Are you sure you want to delete?');
    if (res) {
      this.productService.deleteProduct(product.id).subscribe(result => console.log(result));
    }
  }







  // handleSubmitForm(value: Product){
  //   this.products.push(value)
  // }  




}

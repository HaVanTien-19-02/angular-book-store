import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductDetailComponent } from './product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';



@NgModule({
  declarations: [AdminProductDetailComponent, AdminProductListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdminProductListComponent
  ]
})
export class AdminModule { }

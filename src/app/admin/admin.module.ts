import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductDetailComponent } from './product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './product/admin-product-form/admin-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddReactiveComponent } from './product/admin-product-add-reactive/admin-product-add-reactive.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminProductDetailComponent, AdminProductListComponent, AdminProductFormComponent, AdminProductAddReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule 
  ],
  exports: [
    AdminProductListComponent
  ]
})
export class AdminModule { }

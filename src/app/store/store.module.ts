import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyBuyLaterComponent } from './my-buy-later/my-buy-later.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterComponent } from './product-list/product-filter/product-filter.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPagingComponent } from './product-list/product-paging/product-paging.component';
import { ProductSidebarComponent } from './product-list/product-sidebar/product-sidebar.component';
import { ProductSlideshowComponent } from './product-list/product-slideshow/product-slideshow.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingSummaryComponent } from './shopping-summary/shopping-summary.component';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSlideshowComponent,
    ProductItemComponent,
    ProductSidebarComponent,
    ProductFilterComponent,
    ProductPagingComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShippingFormComponent,
    CheckOutComponent,
    ShoppingSummaryComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    MyFavoritesComponent,
    MyBuyLaterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShippingFormComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent
  ]
})
export class StoreModule { }

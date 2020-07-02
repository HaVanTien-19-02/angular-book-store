import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
// import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    
    component: ProductListComponent
  },
  {
    path: 'product/:pid',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'shipping',
    component: ShippingFormComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'my-favorites',
    component: MyFavoritesComponent,
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}

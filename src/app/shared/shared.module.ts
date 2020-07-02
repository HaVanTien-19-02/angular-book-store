import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './components/quantity/quantity.component';
import { PricePipe } from './pipes/price.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { PopupConfirmComponent } from './components/popup-confirm/popup-confirm.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';



@NgModule({
  declarations: [QuantityComponent, PricePipe, DiscountPipe, PopupConfirmComponent, ForbiddenNameDirective],
  imports: [
    CommonModule
  ],
  exports: [QuantityComponent, PricePipe, DiscountPipe, PopupConfirmComponent]
})
export class SharedModule { }

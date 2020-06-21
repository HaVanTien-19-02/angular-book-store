import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(finalPrice: number, regularPrice: number, prefix: string = ''): string {
    if (!finalPrice || !regularPrice) {
      return;
    }
    return prefix + (finalPrice * 100 / regularPrice).toFixed() + '%';
  }

}

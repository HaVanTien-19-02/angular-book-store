import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  @Output() changeQuantity = new EventEmitter<number>();

  quantity = 1;

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.quantity++;
    this.changeQuantity.emit(this.quantity);
  }

  decrease() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity--;
    this.changeQuantity.emit(this.quantity);
  }
}

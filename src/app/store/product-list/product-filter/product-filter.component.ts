import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() searchSubmit = new EventEmitter<string>();

  searchValue = '';
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchValue);
    this.searchSubmit.emit(this.searchValue);
  }
}

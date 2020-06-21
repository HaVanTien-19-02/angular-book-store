import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.scss']
})
export class AdminProductDetailComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}

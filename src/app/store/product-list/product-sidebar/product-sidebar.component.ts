import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss']
})
export class ProductSidebarComponent implements OnInit {
  @Input() publishers: string[];
  @Input() authors: string[];

  isEnableClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}

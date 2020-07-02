import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { publishers } from 'src/app/shared/mock-data/publisher-list';

import { ProductService } from 'src/app/shared/services/product.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm: NgForm;
 
  defaultTikiNow = false;
  publishers = [];
  subcription: Subscription;

  constructor (
    private productService: ProductService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.publishers = publishers;
  }

  
  submit(productForm) {
    const product = new Product(productForm.value);
    this.subcription = this.productService.createProduct(product)
      .subscribe(result => this.router.navigateByUrl('/admin'), err => alert(err.message));
  }

  goBack(): void {
    this.location.back();
  }

}

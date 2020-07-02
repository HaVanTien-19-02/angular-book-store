import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { publishers } from 'src/app/shared/mock-data/publisher-list';
import { Product } from 'src/app/shared/models/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-product-add-reactive',
  templateUrl: './admin-product-add-reactive.component.html',
  styleUrls: ['./admin-product-add-reactive.component.scss']
})
export class AdminProductAddReactiveComponent implements OnInit {
  productForm: FormGroup;
  publishers = [];

  subcription: Subscription;

  constructor (
    private fb: FormBuilder, 
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { };


  ngOnInit(): void {
    this.publishers = publishers;
    this.route.params.pipe(
      map(params => params.pid),
      switchMap(pid => this.productService.getProductById(pid))
    ).subscribe(product => {
      this.initForm(product);
    });
  }

  initForm(product): void {
    this.productForm = this.fb.group({
      id: this.fb.control(product.id),
      title: this.fb.control(product.title, Validators.required),
      imageUrl: this.fb.control(product.imageUrl, [Validators.required, Validators.pattern('(http(s?)://).+\.(jpg|jpeg|gif|png)')]),
      author: this.fb.control(product.author, Validators.required),
      finalPrice: this.fb.control(product.finalPrice, Validators.required),
      regularPrice: this.fb.control(product.regularPrice, Validators.required),
      publisher: this.fb.control(product.publisher, Validators.required),
      publishedDate: this.fb.control(product.publishedDate),
      size: this.fb.control(product.size),
      pageCount: this.fb.control(product.pageCount),
      isTikiNow: this.fb.control(product.isTikiNow)
    });
  }

  submit(): void {
    const product = new Product(this.productForm.value);
    this.productService.updateProduct(product).pipe().subscribe(result => this.router.navigateByUrl('/admin'));
  }


  goBack(): void {
    this.location.back();
  }
  // submit(): void {
  //   const product = new Product(this.productForm.value);
  //   this.productService.updateProduct(product).subscribe(result => console.log(result));
  // }
}

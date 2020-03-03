import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-detail-t',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  id: string;
  product: Product;
  productDetailsForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.id = null;
    this.productDetailsForm = this.formBuilder.group({
      name: '',
      lookupCode: '',
      count: 0
    });
  }

  ngOnInit(): void {

  }

  onSubmit(productData) {
    var p = new Product();
    p.name = productData.name;
    p.count = productData.count;
    p.lookupCode = productData.lookupCode;
    if(this.id) {
      this.productService.updateProduct(this.id, p);
    }
    else {
      this.productService.addProduct(p);
    }
  }

  deleteClicked() {
    this.productService.deleteProduct(this.id);
  }
}

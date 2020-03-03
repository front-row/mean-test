import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-detail-t',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string;
  productDetailsForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productDetailsForm = this.formBuilder.group({
      name: '',
      lookupCode: '',
      count: 0
    });
  }

  ngOnInit(): void {
    if(this.id) {
      this.productService.getProduct(this.id)
        .then((product: Product) => {
          console.log(product);
          this.productDetailsForm.controls["name"].setValue(product.name);
          this.productDetailsForm.controls["lookupCode"].setValue(product.lookupCode);
          this.productDetailsForm.controls["count"].setValue(product.count);
        });
    }
  }

  onSubmit(productData) {
    var p = new Product();
    p.name = productData.name;
    p.count = productData.count;
    p.lookupCode = productData.lookupCode;
    if(this.id) {
      this.productService.updateProduct(this.id, p)
        .then((result) => {
          if(result) {
            this.router.navigate(['/products']);
          }
        });
    }
    else {
      this.productService.addProduct(p)
        .then((result) => {
          if(result) {
            this.router.navigate(['/products']);
          }
        })
    }
  }

  deleteClicked() {
    this.productService.deleteProduct(this.id)
      .then((result) => {
        if(result) {
          this.router.navigate(['/products']);
        }
      })
  }
}

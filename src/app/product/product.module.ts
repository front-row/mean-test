import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ProductListingComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
  	MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductListingComponent,
    ProductDetailComponent,
    MatInputModule,
	  MatFormFieldModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';



@NgModule({
  declarations: [ProductListingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListingComponent
  ]
})
export class ProductModule { }

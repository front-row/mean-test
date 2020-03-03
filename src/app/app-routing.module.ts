import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { SigninComponent } from './components/signin/signin.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: SigninComponent
  },
  {
    path: 'mainmenu',
    component: MainMenuComponent
  },
  {
    path: 'employeedetail',
    component: EmployeeDetailComponent
  },
  {
    path: 'products',
    component: ProductListingComponent
  },
  {
    path: 'productdetails',
    component: ProductDetailComponent
  },
  {
    path: 'productdetails/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
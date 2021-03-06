import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { SigninComponent } from './components/signin/signin.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { TransactionPageComponent } from './transaction/transaction-page/transaction-page.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransactionViewComponent } from './transaction/transaction-view/transaction-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signin/:employeeId',
    component: SigninComponent
  },
  {
    path: 'mainmenu',
    component: MainMenuComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employeedetails',
    component: EmployeeDetailComponent
  },
  {
    path: 'employeedetails/isInitial',
    component: EmployeeDetailComponent
  },
  {
    path: 'employeedetails/:id',
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
  },
  {
    path: 'transaction',
    component: TransactionPageComponent
  },
  {
    path: 'transaction/:id',
    component: TransactionPageComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  },
  {
    path: 'transactionview/:id',
    component: TransactionViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
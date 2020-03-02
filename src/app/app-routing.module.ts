import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
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
    path: 'productlisting',
    component: ProductListingComponent
  },
  {
    path: 'productdetail',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
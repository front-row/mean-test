import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { SigninComponent } from './components/signin/signin.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
	  SigninComponent,
    MainMenuComponent,
    SigninComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
	  ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule,
	  AppRoutingModule,
	  BrowserModule,
    BrowserAnimationsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

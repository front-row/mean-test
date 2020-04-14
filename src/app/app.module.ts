import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { SigninComponent } from './components/signin/signin.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

import { HttpRequestInterceptor } from './HttpInterceptor';
import { TransactionPageComponent } from './transaction/transaction-page/transaction-page.component';

@NgModule({
  declarations: [
    AppComponent,
	SigninComponent,
    MainMenuComponent,
    SigninComponent,
    PageHeaderComponent,
    TransactionPageComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule,
	AppRoutingModule,
	BrowserModule,
    BrowserAnimationsModule,
    ProductModule,
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatFormFieldModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

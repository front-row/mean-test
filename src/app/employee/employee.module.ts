import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [EmployeeDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeDetailComponent
  ]
})
export class EmployeeModule { }

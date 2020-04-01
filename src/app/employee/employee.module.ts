import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [EmployeeDetailComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatFormFieldModule,
	MatSelectModule
  ],
  exports: [
    EmployeeDetailComponent,
    EmployeeListComponent
  ]
})
export class EmployeeModule { }

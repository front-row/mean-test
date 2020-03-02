import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail-t',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  employeeDetailsForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
    ) { 
      this.employeeDetailsForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        password: '',
        verifyPassword: '',
        employeeType: '',
        displayId: null
      });
  }

  ngOnInit(): void {

  }

  onSubmit(employeeData) {
    var e = new Employee();
    e.firstName = employeeData.firstName;
    e.lastName = employeeData.lastName;
    e.employeeType = employeeData.employeeType;
    e.password = employeeData.password;
    e.displayId = employeeData.displayId;
    if(employeeData.password == employeeData.verifyPassword) {
      this.employeeService.addEmployee(e);
    }
  }
}

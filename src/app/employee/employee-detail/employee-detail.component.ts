import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'employee-detail-t',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {
  @Input() id: string;
  employeeDetailsForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    debugger;
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.employeeDetailsForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      password: '',
      verifyPassword: '',
      employeeType: '',
      employeeId: null
    });
  }

  ngOnInit(): void {
    if(this.id) {
      this.employeeService.getEmployee(this.id)
        .then((employee: Employee) => {
          this.employeeDetailsForm.controls["firstName"].setValue(employee.firstName);
          this.employeeDetailsForm.controls["lastName"].setValue(employee.lastName);
          this.employeeDetailsForm.controls["password"].setValue(employee.password);
          this.employeeDetailsForm.controls["employeeType"].setValue(employee.employeeType);
          this.employeeDetailsForm.controls["employeeId"].setValue(employee.employeeId);
        })
    }
  }

  onSubmit(employeeData) {
    var e = new Employee();
    e.firstName = employeeData.firstName;
    e.lastName = employeeData.lastName;
    e.employeeType = employeeData.employeeType;
    e.password = employeeData.password;
    e.employeeId = employeeData.employeeId;
    if(employeeData.password == employeeData.verifyPassword) {
      this.employeeService.addEmployee(e)
        .then((result) => {
          if(result) {
            this.router.navigate(['/signin']);
          }
        })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then((employees: Employee[]) => {
        this.employees = employees;
      });
  }

}

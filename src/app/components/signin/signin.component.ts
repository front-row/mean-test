import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  private apiUrl = environment.baseUrl + "/api/auth";

  signInForm = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

  
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ){}

  noEmployeeID = false;
  noPassword = false;
  incorrectPassword = false;
  

  ngOnInit(): void {  
    this.employeeService.getEmployees()
      .then((employees: Employee[]) => {
        if(employees.length == 0) {
          this.router.navigate(['employeedetails', 'isInitial']);
        }
        else {
          var employeeId = this.activatedRoute.snapshot.paramMap.get('employeeId');
          if(employeeId) {
            this.signInForm.controls["employeeId"].setValue(employeeId);
          }
        }
      });
  }



  onSubmit(loginData) 
  {

    this.noEmployeeID = false;
    this.noPassword = false;
    this.incorrectPassword = false;

    if(!loginData.employeeId){
      this.noEmployeeID = true;
      return;
    }

    if(!loginData.password){
      this.noPassword = true;
      return;
    }

    let login = {};
    login['employeeId'] = loginData.employeeId;
    login['password'] = loginData.password;
    return this.http.post(this.apiUrl + '/signIn', login)
      .subscribe((response: Response) => {
        console.log(response);

        if(response){
          this.router.navigate(['mainmenu']);
        } else {
          this.incorrectPassword = true;
        }
      });
  }
}


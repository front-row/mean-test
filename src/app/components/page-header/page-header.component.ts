import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EmployeeService } from '../../employee/employee.service';
import { Employee } from '../../employee/employee';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  providers: [EmployeeService]
})
export class PageHeaderComponent implements OnInit 
{
	private apiUrl = environment.baseUrl + '/api/auth/';
	public signedIn = false;
	signOutButton = new FormGroup({});
	constructor(
		private employeeService: EmployeeService,
		private http: HttpClient,
		private router: Router
	) {
	}

	ngOnInit(): void
	{
		this.http.get(this.apiUrl + 'isLoggedIn').subscribe(response => {
			if(response)
			{
				this.signedIn = true;
			}
		});
		
	}
	
	onSubmit() 
	{
		this.http.post(this.apiUrl + 'signOut', {}).subscribe(response => console.log(response));
		return this.router.navigate(['signin']);
	}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit 
{
	private apiUrl = environment.baseUrl + '/api/auth/';
	public signedIn = false;
	signOutButton = new FormGroup({});
	constructor(private http: HttpClient, private router: Router){}
	ngOnInit(): void
	{
		this.http.get('getActiveEmployeeId').subscribe(response => {
			if(!response)
			{
				this.signedIn = true;
			}
			
		});
		
	}
	
	onSubmit() 
	{
		console.log('Signout request has been sent.');
		this.http.get('signout').subscribe(response => console.log(response));
		return this.router.navigate(['signin']);
	}
}

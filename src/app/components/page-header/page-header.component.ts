import { Component, OnInit } from '@angular/core';
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
	constructor(private http: HttpClient) {}
	ngOnInit(): void
	{
		this.http.get('getActiveEmployeeId').subscribe(response => {
			if(!response)
			{
				signedIn = true;
			}
			
		});
		
	}
	
	onSubmit() 
	{
		console.log('Signout request has been sent.');
		return this.http.get('signout').subscribe(response => console.log(response));
	}
}

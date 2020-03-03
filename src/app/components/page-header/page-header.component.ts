import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit 
{
	private apiUrl = environment.baseUrl + '/api/auth/';
	constructor(private http: HttpClient) {}
	ngOnInit(): void {}
	
	onSubmit(loginData) 
	{
		console.log('Signout request has been sent.');
		return this.http.get('signout').subscribe(response => console.log(response));
	}
}

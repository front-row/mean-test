import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  
  private apiUrl = environment.baseUrl;
  constructor(private router: Router, private http: HttpClient) { }

  manager = false; // is elevated user or manager

  ngOnInit(): void 
  {
	  //TODO MAKE WORK
	this.http.get(this.apiUrl + '/isManager').subscribe(response => {
		if(response)
		{
			this.manager = true;
		}			
	});
  }

	transaction()
	{
		document.getElementById("ErrorTransaction").hidden = false;
	}
	products()
	{
		return this.router.navigate(['products']);
	}
	createEmployee()
	{
		//TODO ROUTE THIS
		return this.router.navigate(['**TODO**'])
	}
	salesReport()
	{
		document.getElementById("ErrorSales").hidden = false;
	}
	cashierReport()
	{
		document.getElementById("ErrorCashier").hidden = false;
	}
}

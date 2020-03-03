import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']

export class SigninComponent implements OnInit{
  private apiUrl = environment.baseUrl + '/api/auth/';
  signInForm = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    // get if user is signed in
    var signedIn = true;
    
    if(!signedIn){
      this.router.navigate(['employeedetail']);
    }
  }

  onSubmit(loginData) 
  {
    console.log('Signin request has been sent.');
    let login = {};
    login['employeeId'] = loginData.id;
    login['password'] = loginData.password;
	console.log(login['id'] + " " + login['password']);
    return this.http.post('signin', login).subscribe(response => console.log(response));
  }
}


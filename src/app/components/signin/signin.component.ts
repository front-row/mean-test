import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
  })

export class SignInComponent {
  signInForm = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

constructor(private http: HttpClient) 
{
}

  onSubmit(loginData) 
  {
    console.log('Signin request has been sent.');
    let login = {};
    login['id'] = loginData.id;
    login['password'] = loginData.password;
	console.log(login['id'] + " " + login['password']);
    return this.http.post('**UNFINISHED**', login).subscribe(response => console.log(response));
  }
}


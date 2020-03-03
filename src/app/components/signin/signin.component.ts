import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  signInForm = new FormGroup({
    username: new FormControl(''),
    psswd: new FormControl(''),
  });

  constructor(private router: Router){}

  ngOnInit(): void {
    // get if user is signed in
    var signedIn = true;
    
    if(!signedIn){
      this.router.navigate(['employeedetail']);
    }
  }



  onSubmit() 
  {
    // TODO: Actually make this do a POST request I guess
    console.log("Congrats this does nothing yet");
  }
}


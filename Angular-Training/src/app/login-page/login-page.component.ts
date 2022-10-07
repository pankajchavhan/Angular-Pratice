import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  name = 'pankaj';    //string value  (for interpolation binding eg)
  lastname = 'chavhan'; //string value

  isDisabled = true; //boolean (for property binding eg)

  constructor() {}

  ngOnInit(): void {}

  //for event binding eg
  onSubmit(){
    alert("event binding works");
  }
}

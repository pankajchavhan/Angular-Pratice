import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  name: string = 'pankaj'; //string value  (for interpolation binding eg)
  lastname = 'chavhan'; //string value

  isDisabled = true; //boolean (for property binding eg)

  constructor(private loginservice: LoginService) {}
  personalDetails: any;
  ngOnInit(): void {
    this.personalDetails = this.loginservice.getPersonalDetails();
  }

  //for event binding eg
  onSubmit() {
    alert('event binding works');
  }
}

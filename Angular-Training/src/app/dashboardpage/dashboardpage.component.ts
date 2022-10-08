import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent implements OnInit {
  personalDetails:any;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
   this.personalDetails = this.loginservice.getPersonalDetails();
  }

}

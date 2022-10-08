import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getPersonalDetails(){
    const data ={
      fName: "pankaj",
      lName: "Chavhan"
     }
     return data;
  }

}

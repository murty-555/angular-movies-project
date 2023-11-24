import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }

  authenticate(uname:any,pword:any){
    if(uname === "admin" && pword === "admin@123"){
      return 200;
    }else{
      return 403
    }
  }
  logout(){
    this._router.navigate(['login'])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  ErrMsg = '';
  succesMsg = '';
  constructor(private _auth: AuthService, private _router: Router){}
  login(){
    if(this.username.trim().length === 0){
      this.ErrMsg = "Username required!"
    }
    else if(this.password.trim().length === 0){
      this.ErrMsg = "Password required!"
    }else{
      let res = this._auth.authenticate(this.username, this.password);
      if(res === 200){
        this.succesMsg = "Successfully logged in"
        this._router.navigate(['home'])
      }
      if(res === 403){
        this.ErrMsg = "Invalid Credentials!"
      }
    }
  }
}

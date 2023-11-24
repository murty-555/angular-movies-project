import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _auth: AuthService, private _router: Router){}
  logout(){
    this._auth.logout()
  }
  goToHome(){
    this._router.navigate(['home'])
  }
}

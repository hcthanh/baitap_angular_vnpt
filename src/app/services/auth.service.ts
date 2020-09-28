import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private loginService: LoginService, private router: Router) { }
  //ham

  canActivate() {
    if (this.loginService.checkCredentials()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

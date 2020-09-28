import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': '-'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router ,private httpClient: HttpClient) { }
///ham inser here
signIn(userId:string,password:string){
  return this.httpClient.post('https://vnpt.fastlms.vn/api/Account/login', {
      'username': userId,
      'password': password
    });
}

checkCredentials() {
    return localStorage.getItem('access_token') ? true : false;
}

getToken() {
  return localStorage.getItem('access_token');
}

login() {
  this.router.navigate(['/login']);
}

logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
  //window.location.href = oauth2.redirectUri;
}

//end function

}

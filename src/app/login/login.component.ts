import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//khai báo biên
  loginForm: FormGroup;
  submitted = false;
  isSinging = false;
  loginData = {
    Username: null,
    Password: null,
    Source: 'Web'
  };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: '' as string,
    password: '' as string,
  })

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router, private tokenService: TokenService) {
    
  }

  ngOnInit(): void {

  }

  validForm(): void {
    let user = {email: this.loginForm.value.email, password: this.loginForm.value.password};
    this.apiService.connectUser(user);
    this.router.navigate(['']);
  }
}

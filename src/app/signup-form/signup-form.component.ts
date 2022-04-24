import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup = this.formBuilder.group({
    email: new FormControl(''),
    password: '' as string,
    pseudo: '' as string,
    avatar: '' as string
  })

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router) {

  }

  ngOnInit(): void {
  }

  validForm(): void {
    let user:User = {email: this.signupForm.value.email, password: this.signupForm.value.password, pseudo: this.signupForm.value.pseudo, avatar: this.signupForm.value.avatar} as User;
    this.apiService.createUser(user).subscribe(truc => console.log(truc));
    this.router.navigate(['login']);
  }
}

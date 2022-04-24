import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/interfaces/user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup = this.formBuilder.group({
    email: new FormControl(''),
    pseudo: new FormControl(''),
    avatar: new FormControl('')
  });

  user:User = {} as User;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private route:ActivatedRoute) {
    let userId = 0;
    this.route.params.subscribe({
      next(val) {
        userId = parseInt(val["id"]);
      }
    });

    let that = this;
    this.apiService.getUser(userId).subscribe({
      next(ret) {
        that.user = ret;
        that.editUserForm.setValue({
          email: that.user.email,
          pseudo: that.user.pseudo,
          avatar: that.user.avatar
       });
      },
      error(err) {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

  validForm(): void {
    let updatedUser:User = this.user;
    updatedUser.email = this.editUserForm.value.email;
    updatedUser.pseudo = this.editUserForm.value.pseudo;
    updatedUser.avatar = this.editUserForm.value.avatar;
    updatedUser.password = '';

    let that = this;
    this.apiService.editUser(updatedUser).subscribe({
      next(res) {
        that.router.navigate(['user/'+res.id]);
      },
      error(err) {
        console.log(err);
      }
    });
  }
}

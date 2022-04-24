import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private apiService: ApiService) {
    let that = this;
    this.apiService.getUsers().subscribe({
      next(ret) {
        that.users = ret.reverse();
      },
      error(err) {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {

  }
}

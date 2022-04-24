import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { Comment } from 'src/interfaces/comment';
import { User } from 'src/interfaces/user';
import { ApiService } from '../api.service';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User = {} as User;

  lastArticles:Array<Article> = [];
  lastComments:Array<Comment> = [];

  nbArticles: number = 5;
  nbComments: number = 5;

  constructor(private apiService: ApiService, private route: ActivatedRoute, public currentUserService: CurrentUserService) {
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
      },
      error(err) {
        console.log(err);
      }
    });

    this.apiService.getUserArticles(userId).subscribe({
      next(ret) {
        // that.lastArticles = ret.reverse().slice(-that.nbArticles).reverse();
        that.lastArticles = ret.slice(0, that.nbArticles);
      },
      error(err) {
        console.log(err);
      }
    });

    this.apiService.getUserComments(userId).subscribe({
      next(ret) {
        that.lastComments = ret.slice(0, that.nbComments);
      },
      error(err) {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }
}

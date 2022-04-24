import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { User } from 'src/interfaces/user';
import { ApiService } from '../api.service';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article:Article = {} as Article;
  users:Array<User> = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, public currentUserService: CurrentUserService) {
    let articleId = 0;
    this.route.params.subscribe({
      next(val) {
        articleId = parseInt(val["id"]);
      }
    });

    let that = this;

    this.apiService.getUsers().subscribe({
      next(response) {
        that.users = response;
      },
      error(err) {
        console.log(err);
      }
    });

    this.apiService.getArticle(articleId).subscribe({
      next(ret) {
        that.article = ret;
        that.apiService.getArticleComments(articleId).subscribe(comments => that.article.comments = comments);
      },
      error(err) {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

  findUser(userId:number): User {
    let index = this.users.findIndex((user) => user.id === userId);
    if (index > -1) {
      return this.users[index];
    }
    return {pseudo: 'Utilisateur inconnu', id: -1} as User;
  }

  // isCurrentUser(userId:string): boolean {
  //   return this.currentUserService.isCurrentUser(parseInt(userId));
  // }

}

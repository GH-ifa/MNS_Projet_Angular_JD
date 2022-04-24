import { Component, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/article';
import { User } from 'src/interfaces/user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Array<Article> = [];
  users: Array<User> = []; // je récupère la liste des utilisateurs en 1 fois plutot que de faire 1 requête par article, pour pas exploser le serveur de l'api

  constructor(private apiService:ApiService) {
    let that = this;

    this.apiService.getUsers().subscribe({
      next(response) {
        that.users = response;
      },
      error(err) {
        console.log(err);
      }
    });

    this.apiService.getArticles().subscribe({
      next(ret) {
        that.articles = ret;
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
}

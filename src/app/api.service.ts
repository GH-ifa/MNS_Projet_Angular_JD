import { Injectable } from '@angular/core';
import { User, UserLogin } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/interfaces/article';
import { Comment } from 'src/interfaces/comment';
import { TokenService } from './token.service';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://reseau.jdedev.fr/api';

  constructor(private http: HttpClient, private tokenService:TokenService, private currentUserService: CurrentUserService) {

  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl + '/user', user);
  }

  connectUser(user: UserLogin): void {
    let that = this;
    this.http.post<any>(this.apiUrl + '/user/connect', user).subscribe(response => {
      this.tokenService.setToken(response.token);
      this.getUser(response.id).subscribe({
        next(ret) {
          that.currentUserService.setCurrentUser(ret);
        },
        error(err) {
          console.log(err);
        }
      });
    });
  }

  getUsers(): Observable<Array<User>> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Array<User>>(this.apiUrl + '/user', {headers: headers});
  }

  getUser(userId: number): Observable<User> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<User>(this.apiUrl + `/user/${userId}`, {headers: headers});
  }

  getArticles(): Observable<Array<Article>> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Array<Article>>(this.apiUrl + '/article', {headers: headers});    
  }

  getArticle(articleId: Number): Observable<Article> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Article>(this.apiUrl + `/article/${articleId}`, {headers: headers});
  }

  getComment(commentId: Number): Observable<Comment> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Comment>(this.apiUrl + `/comment/${commentId}`, {headers: headers});
  }

  getArticleComments(articleId: number): Observable<Array<Comment>> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Array<Comment>>(this.apiUrl + `/article/${articleId}/comment`, {headers: headers});
  }

  getUserArticles(userId: number): Observable<Array<Article>> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Array<Article>>(this.apiUrl + `/user/${userId}/article`, {headers: headers});  
  }

  getUserComments(userId: number): Observable<Array<Comment>> {
    const headers = this.getTokenizedHeaders();
    return this.http.get<Array<Comment>>(this.apiUrl + `/user/${userId}/comment`, {headers: headers});  
  }

  createArticle(article: Article): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.post(this.apiUrl + '/article', article, {headers: headers});
  }

  editUser(user: User): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.put(this.apiUrl + '/user/' + user.id, user, {headers: headers});
  }

  editArticle(article: Article): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.put(this.apiUrl + '/article/' + article.id_article, article, {headers: headers});
  }

  editComment(comment: Comment): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.put(this.apiUrl + '/comment/'+ comment.id_commentaire, comment, {headers: headers});
  }

  createComment(comment: Comment): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.post(this.apiUrl + '/comment', comment, {headers: headers});
  }

  deleteUser(userId: number): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.delete<User>(this.apiUrl + `/user/${userId}`, {headers: headers});
  }

  deleteArticle(articleId: number): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.delete<Article>(this.apiUrl + `/article/${articleId}`, {headers: headers});
  }

  deleteComment(commentId: number): Observable<any> {
    const headers = this.getTokenizedHeaders();
    return this.http.delete<Comment>(this.apiUrl + `/comment/${commentId}`, {headers: headers});
  }

  getTokenizedHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenService.getToken()}`
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleFormComponent } from './add-article-form/add-article-form.component';
import { ArticleDeleteComponent } from './article-delete/article-delete.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CommentDeleteComponent } from './comment-delete/comment-delete.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { ConnectedGuard } from './connected.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: 'users', component: UserListComponent, canActivate: [ConnectedGuard]},
  {path: 'user/:id', component: UserDetailComponent, canActivate: [ConnectedGuard]},
  {path: 'articles', component: ArticleListComponent, canActivate: [ConnectedGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [ConnectedGuard]},
  {path: 'article/new', component: AddArticleFormComponent, canActivate: [ConnectedGuard]},
  {path: 'article/:id', component: ArticleDetailComponent, canActivate: [ConnectedGuard]},
  {path: 'user/delete/:id', component: UserDeleteComponent, canActivate: [ConnectedGuard]},
  {path: 'article/delete/:id', component: ArticleDeleteComponent, canActivate: [ConnectedGuard]},
  {path: 'comment/delete/:id', component: CommentDeleteComponent, canActivate: [ConnectedGuard]},
  {path: 'user/edit/:id', component: UserEditComponent, canActivate: [ConnectedGuard]},
  {path: 'article/edit/:id', component: ArticleEditComponent, canActivate: [ConnectedGuard]},
  {path: 'comment/edit/:id', component: CommentEditComponent, canActivate: [ConnectedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { LogoutComponent } from './logout/logout.component';
import { AddArticleFormComponent } from './add-article-form/add-article-form.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ArticleDeleteComponent } from './article-delete/article-delete.component';
import { CommentDeleteComponent } from './comment-delete/comment-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    SignupFormComponent,
    UserListComponent,
    UserDetailComponent,
    ArticleListComponent,
    LogoutComponent,
    AddArticleFormComponent,
    ArticleDetailComponent,
    AddCommentFormComponent,
    UserDeleteComponent,
    ArticleDeleteComponent,
    CommentDeleteComponent,
    UserEditComponent,
    ArticleEditComponent,
    CommentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

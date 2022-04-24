import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Comment } from 'src/interfaces/comment';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.css']
})
export class AddCommentFormComponent implements OnInit {

  addCommentForm: FormGroup = this.formBuilder.group({
    contenu: '' as string
  })

  @Input() idArticle: string = '-1';

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  validForm(): void {
    let newComment:Comment = {contenu: this.addCommentForm.value.contenu, idArt: parseInt(this.idArticle)} as Comment;
    let that = this;
    this.apiService.createComment(newComment).subscribe({
      next(res) {
        that.router.navigate(['/']).then(() => {
          that.router.navigate(['article/' + res.id_article]);
        });
      },
      error(err) {
        console.log(err);
      }
    });
  }
}

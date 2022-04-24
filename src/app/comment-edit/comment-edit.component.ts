import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Comment } from 'src/interfaces/comment';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  editCommentForm: FormGroup = this.formBuilder.group({
    contenu: new FormControl('')
  });

  comment:Comment = {} as Comment;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private route:ActivatedRoute) {
    let commentId = 0;
    this.route.params.subscribe({
      next(val) {
        commentId = parseInt(val["id"]);
      }
    });

    let that = this;
    this.apiService.getComment(commentId).subscribe({
      next(ret) {
        that.comment = ret;
        that.editCommentForm.setValue({
          contenu: that.comment.contenu
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
    let updatedComment:Comment = this.comment;
    updatedComment.contenu = this.editCommentForm.value.contenu;

    let that = this;

    // return ;
    this.apiService.editComment(updatedComment).subscribe({
      next(res) {
        that.router.navigate(['article/'+res.id_article]);
      },
      error(err) {
        console.log(err);
      }
    });
  }
}

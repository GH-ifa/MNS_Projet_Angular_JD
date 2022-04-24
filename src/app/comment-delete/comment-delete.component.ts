import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.css']
})
export class CommentDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private tokenService: TokenService, private router: Router) {
    let commentId = 0;
    this.route.params.subscribe({
      next(val) {
        commentId = parseInt(val["id"]);
      }
    });

    let that = this;
    this.apiService.deleteComment(commentId).subscribe({
      next(ret) {
        console.log(ret);
        that.router.navigate(['']);
      },
      error(err) {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

}

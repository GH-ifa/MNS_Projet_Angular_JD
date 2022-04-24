import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css']
})
export class ArticleDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private tokenService: TokenService, private router: Router) {
    let articleId = 0;
    this.route.params.subscribe({
      next(val) {
        articleId = parseInt(val["id"]);
      }
    });

    let that = this;
    this.apiService.deleteArticle(articleId).subscribe({
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

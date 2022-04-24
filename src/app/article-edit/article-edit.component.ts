import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  editArticleForm: FormGroup = this.formBuilder.group({
    titre: '' as string,
    contenu: '' as string
  })

  article:Article = {} as Article;


  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router, private route:ActivatedRoute) {
    let articleId = 0;
    this.route.params.subscribe({
      next(val) {
        articleId = parseInt(val["id"]);
      }
    });

    let that = this;

    this.apiService.getArticle(articleId).subscribe({
      next(ret) {
        that.article = ret;
        that.editArticleForm.setValue({
          titre: that.article.titre,
          contenu: that.article.contenu
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
    let updatedArticle:Article = this.article;
    updatedArticle.titre = this.editArticleForm.value.titre;
    updatedArticle.contenu = this.editArticleForm.value.contenu;

    let that = this;

    this.apiService.editArticle(updatedArticle).subscribe({
      next(res) {
        that.router.navigate(['article/'+res.id_article]);
      },
      error(err) {
        console.log(err);
      }
    });
  }

}

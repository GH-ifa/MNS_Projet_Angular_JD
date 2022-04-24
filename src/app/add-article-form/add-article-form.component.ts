import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent implements OnInit {

  addArticleForm: FormGroup = this.formBuilder.group({
    titre: '' as string,
    contenu: '' as string
  })

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router) {

  }

  ngOnInit(): void {
  }

  validForm(): void {
    let newArticle:Article = {titre: this.addArticleForm.value.titre, contenu: this.addArticleForm.value.contenu} as Article;
    let that = this;
    this.apiService.createArticle(newArticle).subscribe({
      next(res) {
        that.router.navigate(['article/'+res.id_article]);
      },
      error(err) {
        console.log(err);
      }
    });
  }
}

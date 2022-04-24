import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private tokenService: TokenService, private router: Router) {
    let userId = 0;
    this.route.params.subscribe({
      next(val) {
        userId = parseInt(val["id"]);
      }
    });

    let that = this;
    this.apiService.deleteUser(userId).subscribe({
      next(ret) {
        that.tokenService.disconnect();
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

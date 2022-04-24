import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenService, private router:Router) {
    this.tokenService.disconnect();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}

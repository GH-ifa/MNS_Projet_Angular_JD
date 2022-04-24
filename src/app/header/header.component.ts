import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService: TokenService, public currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
  }
  
  isConnected(): boolean {
    return this.tokenService.isConnected();
  }
}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/interfaces/user';
import { CurrentUserService } from '../current-user.service';
import { TokenService } from '../token.service';

import { HeaderComponent } from './header.component';

class MockTokenService {
  token:string = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJuaXZlYXUiOjEsImlhdCI6MTY1MDc0MjI1OSwiZXhwIjoxNjUwNzQ5NDU5fQ.5S7z6CEC_Y_b9xmHGd_IiftAhOEtJMC_WNZRs_C9beXxMwVQ1ZaF-b0pXDGZj1661394kqIc7PrWdZlJ3Ong7w';
  isConnected(): boolean {
    return this.token !== '';
  }
  setToken(token:string): void {
    this.token = token;
  }
}

class MockCurrentUserService {
  isCurrentUser(userId: number): boolean {
    return this.user.id === userId;
  }
  user:User = {id: 69, pseudo: 'Julien'} as User;
  getCurrentUser(): User {
    return this.user;
  }
  setCurrentUser(user:User): void {
    this.user = user;
  }
}

describe('HeaderComponent when connected', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let currentUserService:CurrentUserService;
  let tokenService:TokenService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        HeaderComponent,
        { provide: CurrentUserService, useClass: MockCurrentUserService },
        { provide: TokenService, useClass: MockTokenService }
      ]
    })
    .compileComponents();
    component = TestBed.inject(HeaderComponent);
    currentUserService = TestBed.inject(CurrentUserService);
    tokenService = TestBed.inject(TokenService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be connected', () => {
    expect(component.isConnected()).toBeTrue();
  });

  it('should have Julien as the current user', () => {
    expect(component.currentUserService.getCurrentUser().pseudo).toBe('Julien');
  });

  it('should not have Jean-Claude as the current user', () => {
    expect(component.currentUserService.getCurrentUser().pseudo).not.toBe('Jean-Claude');
  });

  it('should be the current user', () => {
    expect(component.currentUserService.isCurrentUser(69)).toBeTrue;
  });

  it('should not be the current user', () => {
    expect(component.currentUserService.isCurrentUser(200)).toBeTrue;
  });
});


describe('HeaderComponent when not connected', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let currentUserService:CurrentUserService;
  let tokenService:TokenService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        HeaderComponent,
        { provide: CurrentUserService, useClass: MockCurrentUserService },
        { provide: TokenService, useClass: MockTokenService }
      ]
    })
    .compileComponents();
    component = TestBed.inject(HeaderComponent);
    currentUserService = TestBed.inject(CurrentUserService);
    tokenService = TestBed.inject(TokenService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tokenService.setToken('');
    currentUserService.setCurrentUser({} as User);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be connected', () => {
    expect(component.isConnected()).not.toBeTrue();
  });

  it('should not have Julien as the current user', () => {
    expect(component.currentUserService.getCurrentUser().pseudo).not.toBe('Julien');
  });

  it('should not have Jean-Claude as the current user', () => {
    expect(component.currentUserService.getCurrentUser().pseudo).not.toBe('Jean-Claude');
  });

  it('should not be the current user', () => {
    expect(component.currentUserService.isCurrentUser(69)).not.toBeTrue;
  });

  it('should not be the current user', () => {
    expect(component.currentUserService.isCurrentUser(200)).not.toBeTrue;
  });
});
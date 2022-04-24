import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = '';

  constructor() {

  }

  disconnect(): void {
    this.token = '';
  }

  isConnected(): boolean {
    return this.token !== '';
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }
}

import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService when not connected', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an empty token', () => {
    expect(service.getToken()).toBe('');
  });


  it('should be disconnected', () => {
    expect(service.isConnected()).toBeFalse();
  });

  it('should stay disconnected', () => {
    service.disconnect();
    expect(service.isConnected()).toBeFalse();
  });

});

describe('TokenService when connected', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
    service.setToken('eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJuaXZlYXUiOjEsImlhdCI6MTY1MDc0MjI1OSwiZXhwIjoxNjUwNzQ5NDU5fQ.5S7z6CEC_Y_b9xmHGd_IiftAhOEtJMC_WNZRs_C9beXxMwVQ1ZaF-b0pXDGZj1661394kqIc7PrWdZlJ3Ong7w');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the correct token', () => {
    expect(service.getToken()).toBe('eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJuaXZlYXUiOjEsImlhdCI6MTY1MDc0MjI1OSwiZXhwIjoxNjUwNzQ5NDU5fQ.5S7z6CEC_Y_b9xmHGd_IiftAhOEtJMC_WNZRs_C9beXxMwVQ1ZaF-b0pXDGZj1661394kqIc7PrWdZlJ3Ong7w');
  });

  it('should be connected', () => {
    expect(service.isConnected()).toBeTrue();
  });

  it('should be disconnected', () => {
    service.disconnect();
    expect(service.isConnected()).toBeFalse();
  });


});
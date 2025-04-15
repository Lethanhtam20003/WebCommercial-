import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api-response.model';
import { AuthenticationResponse } from '../models/authentication-response.model';
import { authenticatedResponse } from '../models/authenticated_response.model';
import { URL_API } from '../constant/url-api.constants';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) {}

  checkauth(){
    const token = localStorage.getItem('access_token');
    if (!token) {
      return false;
    }
    return this.http.get<ApiResponse<authenticatedResponse>>(
      URL_API.checkAuthUrl)
    .pipe(
      map((res) => {
        if (res.code == 200) {
          if(!res.result.auth) {
            return this.refreshToken();
          }
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => {  
        return of(false);
      })
    );
  }
  refreshToken() {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      this.http.post<ApiResponse<AuthenticationResponse>>(
        URL_API.refreshTokenUrl,
        { token: access_token }
      ).subscribe((res) => {
        if(res.code == 200) {
          localStorage.setItem('access_token', res.result.access_token);
          return true;
        } else {
          return false;
        }
      });
    }
  }
}

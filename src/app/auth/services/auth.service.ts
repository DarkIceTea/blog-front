import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterFormModel } from '../models/register.model';
import { LoginFormModel } from '../models/login.model';
import { Tokens } from '../models/tokens.model';
import { AuthResponse } from '../models/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/posts';

  constructor(private http: HttpClient) { }

  register(postData: RegisterFormModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, postData);
  }

  login(postData: LoginFormModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, postData);
  }

  setAuthToLocalStorage(auth: AuthResponse) {
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  getAuthFromLocalStorage() {
    let auth = localStorage.getItem("auth");
    if (auth) {
      return JSON.parse(auth) as AuthResponse;
    }
    return null;
  }

  removeAuthFromLocalStorage(){
    localStorage.removeItem("auth");
  }
}

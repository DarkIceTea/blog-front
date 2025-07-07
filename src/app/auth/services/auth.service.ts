import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterFormModel } from '../models/register.model';
import { LoginFormModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/posts'; 

  constructor(private http: HttpClient) { }
  
  register(postData: RegisterFormModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
 
  login(postData: LoginFormModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
  
  setTokensToLocalStorage(tokens: any){
    
  }
}

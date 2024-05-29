import { Injectable } from '@angular/core';
import { HttpParams,HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/user/check'

  authenticate(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    console.log(params);
    return this.http.get<User>(this.apiUrl, {params}); 
  }
}

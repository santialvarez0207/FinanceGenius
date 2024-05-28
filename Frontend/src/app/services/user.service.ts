import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/user'

  getUsers(){
    return this.http.get<User[]>(this.apiUrl)
  }

  getUser(id:string){
    return this.http.get<User>(this.apiUrl + `/${id}`)
  }

  putUser(id:String, user: User){
    return this.http.put<User>(this.apiUrl + `/${id}`, user)
  }

  postUser(user: User){
    return this.http.post<User>(this.apiUrl, user)
  }

  deleteUser(id: string){
    return this.http.delete<User>(this.apiUrl + `/${id}`)
  }
}

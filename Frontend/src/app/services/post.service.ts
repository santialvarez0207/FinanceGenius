import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/post'

  getPosts(){
    return this.http.get<Post[]>(this.apiUrl)
  }

  getPost(id:string){
    return this.http.get<Post>(this.apiUrl + `/${id}`)
  }

  postPost(post: Post){
    return this.http.post<Post>(this.apiUrl, post)
  }

  deletePost(id: string){
    return this.http.delete<Post>(this.apiUrl + `/${id}`)
  }
}

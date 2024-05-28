import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Community } from '../models/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/community'

  getCommunities(){
    return this.http.get<Community[]>(this.apiUrl)
  }

  getCommunity(id:string){
    return this.http.get<Community>(this.apiUrl + `/${id}`)
  }

  postCommunity(community: Community){
    return this.http.post<Community>(this.apiUrl, community)
  }

  deleteCommunity(id: string){
    return this.http.delete<Community>(this.apiUrl + `/${id}`)
  }

}

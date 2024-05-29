import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../services/community.service';
import { Community } from '../../models/community';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.css'
})
export class CommunitiesComponent implements OnInit{

  Cards: Community[] =[]

  constructor(private communityService: CommunityService){}

  ngOnInit(): void {
      this.getCommunities();
  }
  
  getCommunities(){
    this.communityService.getCommunities().subscribe(res => {
      this.Cards = res as Community[]
    }, err => {
      window.alert('Hubo un error al traer las comunidades')
    })
  }

}

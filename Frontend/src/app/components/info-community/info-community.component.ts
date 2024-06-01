import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from '../../services/community.service';
import { Community } from '../../models/community';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';




@Component({
  selector: 'app-info-community',
  templateUrl: './info-community.component.html',
  styleUrl: './info-community.component.css'
})
export class InfoCommunityComponent {
  contador:number = 0;

  constructor(
    private activatedRoute:ActivatedRoute,
    private communityService:CommunityService,
    private postService:PostService,
    private userService:UserService
  ) { }
  id:string=''
  data:Community = new Community()
  posts:Array<Post> =[]
  user_id:string=''
  user:User= new User();
  seguido:boolean =false

  ngOnInit(): void {
    const storedData = localStorage.getItem('User');
    this.user_id=JSON.parse(storedData||'').id;
    this.activatedRoute.params.subscribe(params => { 
      this.id= params['id'];
      this.communityService.getCommunity(this.id).subscribe(res=>{
        this.data=res as Community
        this.data.posts.forEach(x=>{
          this.postService.getPost(x).subscribe(da=>{
            this.posts.push(da as Post)
          })
        })
      })
      this.userService.getUser(this.user_id).subscribe(res=>{
        this.user=res as User
        this.seguido=this.user.follows.some(data=>data==this.id)
      })
    })
  }

  seguir(){
    if(this.seguido){
      this.user.follows=this.user.follows.filter(x=>x!=this.id)
    }else{
      this.user.follows.push(this.id)
    }
    this.seguido=this.user.follows.some(data=>data==this.id)
    this.userService.putUser(this.user_id,this.user).subscribe(res=>{
      alert('Cambio')
    })
  }

  publicar(){
    let title=(<HTMLInputElement>document.getElementById("input_title")).value||""
    let content=(<HTMLInputElement>document.getElementById("input_content")).value||""
    let post = new Post('',this.user.name,this.user._id,this.data.name,this.data._id,content,title,0)
    this.postService.postPost(post).subscribe(res=>{
      let temp=res as Post
      this.posts.push(temp)
      this.user.posts.push(temp._id)
      console.log(temp)
      this.userService.putUser(this.user_id,this.user).subscribe(res=>{
        //console.log(res)
      })
      this.data.posts.push(temp._id)
      this.communityService.putCommunity(this.id,this.data).subscribe(res=>{
        console.log(res)
      })

    })
  }

  likeit(){
    let like = document.getElementById('likeIcon');

    if(this.contador==0){
      this.contador=1;
      like!.style.fontVariationSettings = "'FILL' 1, 'wght' 400,'GRAD' 0,'opsz' 24";
    }else{
      this.contador=0;
      like!.style.fontVariationSettings = "'FILL' 0, 'wght' 400,'GRAD' 0,'opsz' 24";
    }
  }

  modalClose(){
    let modals = document.getElementById('modal');
    modals!.style.display = 'none'
  }

  modalOpen(){
    let modals = document.getElementById('modal');
    modals!.style.display = 'flex'
  }
}

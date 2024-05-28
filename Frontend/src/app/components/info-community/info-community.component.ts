import { Component } from '@angular/core';

@Component({
  selector: 'app-info-community',
  templateUrl: './info-community.component.html',
  styleUrl: './info-community.component.css'
})
export class InfoCommunityComponent {
  contador:number = 0;


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

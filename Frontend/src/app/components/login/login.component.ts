import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  ngOnInit():void{

  const sign_in_btn:HTMLElement = document.querySelector("#sign-in-btn")?
  const sign_up_btn:HTMLElement = document.querySelector("#sign-up-btn")?
  const container = document.querySelector(".container");
 
    sign_up_btn.addEventListener("click", () =>{
      container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () =>{
      container.classList.remove("sign-up-mode");
    });
}

}
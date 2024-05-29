import { Component,OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, 
    private userService: UserService){ }

  ngOnInit():void{

    const sign_in_btn:HTMLElement = document.querySelector("#sign-in-btn") as HTMLElement
    const sign_up_btn:HTMLElement = document.querySelector("#sign-up-btn") as HTMLElement
    const container = document.querySelector(".container") as HTMLElement
   
      sign_up_btn.addEventListener("click", () =>{
        container.classList.add("sign-up-mode");
      });
      
      sign_in_btn.addEventListener("click", () =>{
        container.classList.remove("sign-up-mode");
      });
  }


  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  sendL(){
    let email = this.formLogin.value.email || "";
    let password = this.formLogin.value.password || "";

    this.loginService.authenticate(email, password).subscribe(res => {
      let userLogged = res as User;

      localStorage.setItem('User', JSON.stringify(userLogged));
      window.location.replace('http://localhost:4200/home-user');
    }, err => {
      window.alert('No se ha podido logear, usuario incorrecto');
    })
    this.formLogin.reset();
  } 

  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  sendR(){
    let name = this.formRegister.value.name || ""
    let email = this.formRegister.value.email || "";
    let password = this.formRegister.value.password || "";

    const user = new User('',email,name,password,[],[])

    this.userService.postUser(user).subscribe(res => {
      window.alert('Usuario registrado con exito')
    }, err => {
      window.alert('Hubo un error al registrar el usuario')
    })
    this.formRegister.reset();
  } 

}
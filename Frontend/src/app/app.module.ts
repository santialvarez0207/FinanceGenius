import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CommunitiesComponent } from './components/communities/communities.component';
import { InfoCommunityComponent } from './components/info-community/info-community.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    PerfilComponent,
    HomeUserComponent,
    BuscadorComponent,
    CommunitiesComponent,
    InfoCommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

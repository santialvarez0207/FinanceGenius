import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CommunitiesComponent } from './components/communities/communities.component';
import { InfoCommunityComponent } from './components/info-community/info-community.component';
import { PanelComponent } from './components/panel/panel.component';

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
    InfoCommunityComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

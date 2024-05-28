import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CommunitiesComponent } from './components/communities/communities.component';
import { InfoCommunityComponent } from './components/info-community/info-community.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  
  {path: '',
   component: LayoutComponent,
   children: [
    {path: 'perfil/:id', component: PerfilComponent },
    {path: 'home-user', component: HomeUserComponent},
    {path: 'buscador', component: BuscadorComponent},
    {path: 'communities', component: CommunitiesComponent},
    {path: 'infoCommunity', component: InfoCommunityComponent},
    {path: 'panel', component: PanelComponent}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

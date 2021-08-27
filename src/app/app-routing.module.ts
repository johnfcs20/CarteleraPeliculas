import { LoginUserComponent } from './login-user/login-user.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
{path: '', redirectTo: 'lista-peliculas', pathMatch: 'full'},
//  {path: 'login-user', component: LoginUserComponent},
{path: 'lista-peliculas', component: ListaPeliculasComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

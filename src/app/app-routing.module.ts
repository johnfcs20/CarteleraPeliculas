import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'lista-peliculas', pathMatch: 'full'},
  {path: 'lista-peliculas', component: ListaPeliculasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

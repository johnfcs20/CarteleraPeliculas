import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaPeliculasService } from './lista-peliculas/lista-peliculas.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    AuthModule.forRoot({
      domain: 'dev-ea6ehaks.us.auth0.com',
      clientId: 'Kkhejkz6ZZAavKkco99uu4ruLFbUlWIk'
    }),
  ],
  providers: [ListaPeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

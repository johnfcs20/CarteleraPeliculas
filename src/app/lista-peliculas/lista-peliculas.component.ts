import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {


  listaPeliculas: any[] = [

    {descripcion: 'bla 1', tiempo: 0.5},

    {descripcion: 'bla 2', tiempo: 0.5},

    {descripcion: 'bla 3', tiempo: 0.5},
    
    {descripcion: 'bla 4', tiempo: 0.5},

    {descripcion: 'bla 5', tiempo: 0.5},

    {descripcion: 'bla 6', tiempo: 0.5}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

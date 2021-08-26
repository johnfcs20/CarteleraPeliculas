import { ListaPeliculasService } from './lista-peliculas.service';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { listaPeliculas } from '../modelos/listaPeliculas';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {


  peliculasLista: any[] = [];

  loading: boolean = false;



  constructor( private _peliculasService: ListaPeliculasService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.listaPeliculas();

  }

  indicePagina: number = 1;


  listaPeliculas(){
 
    setTimeout(() => {
         this.loading = true;
          this._peliculasService.listaPeliculas().subscribe((data: any)=>{
          this.peliculasLista =  data.entries as any[];
                this.loading = false;
         });
       
    }, 500);
  }

  filtroTipo(tipo: string){

      this.listaPeliculas();
      this.loading = true;
      setTimeout(() => {
      this.peliculasLista = this.peliculasLista.filter(x => x.programType == tipo);
        this.loading = false;
      },1000);

    }


    cambiarPagina(){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        },1000);
    }
 






}




import { ListaPeliculasService } from './lista-peliculas.service';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { listaPeliculas } from '../modelos/listaPeliculas';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {


  peliculasLista: any[] = [];
  peliculasListaCopia: any[] = [];
  anios: any[] = [];
  loading: boolean = false;
  filterSeries: boolean = false;
  indicePagina: number = 1;
  formularioFiltrosBusqueda: FormGroup;


  constructor( private _peliculasService: ListaPeliculasService, public fb: FormBuilder) {



  }

  ngOnInit(): void {
    this.main();
  }

  main(){

    this.listaPeliculas();
    this.anios = rangoAños();
    this.formularioFiltrosBusqueda = this.fb.group({
          anio: [""]
       });

  }


  listaPeliculas(){
    setTimeout(() => {
          this.loading = true;
          this._peliculasService.listaPeliculas().subscribe((data: any)=>{
          this.peliculasLista =  data.entries as any[];
          this.peliculasListaCopia = data.entries as any[];
                this.loading = false;
         });
       
    }, 500);
  }

  filtroTipo(tipo: string){


    this.formularioFiltrosBusqueda.reset({});
    this.indicePagina = 1;
    if(tipo === 'series'){
      this.filterSeries = true;
    } else {
      this.filterSeries = false;
    }

   // this.listaPeliculas();
    this.loading = true;
    setTimeout(() => {
      this.peliculasListaCopia = this.peliculasLista.filter(x => x.programType == tipo);
        this.loading = false;
    },1000);

  }


  filtroAnio(){
      
   // this.listaPeliculas();
    this.loading = true;
    this.indicePagina = 1;
    setTimeout(() => {
      this.peliculasListaCopia = this.peliculasLista.filter(x => x.releaseYear == this.formularioFiltrosBusqueda.value['anio']);
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


function rangoAños () {
  const max = new Date().getFullYear()
  const min = max - 20
  const years = []

  for (let i = max; i >= min; i--) {
      years.push(i)
  }
  return years
}

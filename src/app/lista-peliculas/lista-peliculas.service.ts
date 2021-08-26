import { listaPeliculas } from './../modelos/listaPeliculas';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class ListaPeliculasService {
  constructor(
    private http: HttpClient,

  ) {}



    listaPeliculas(): Observable<any> {
    /*<summary>
        Este metodo se encarga de hacer la peticion al API que retorna la lista de pelicuas registradas
    </summary>*/
    // <returns> Retorna una lista peliculas</returns>
  
    const url = "https://assets-aivo.s3.amazonaws.com/movies.json"

    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }


  ////////////////////////////////////////////////////////// ERROR /////////////////////////////////////////////////////////////

  private handleError(error) {
    // debugger
    // <param name = "error"> En este parametro se alamacena un error que ocurra</param>
    /*<summary>
          Este metodo se encarga de capturar un error y enviar una respuesta de acuerdo al tipo.
      </summary>*/
    // <returns> retorna un mensaje y el estatus de acuerdo al error </returns>

    if (error.error instanceof ErrorEvent) {
      console.error("Ocurrio un error:", error.error.message);
    } else {
      // De lo contrario retorna un error de repuesta por parte del Back End
      // El ( Body ) va a contener la pista de lo que salio mal en el Backe End

      // tslint:disable-next-line:no-unused-expression
      ` Backend tiene el error ${error.status},` +
        ` el error es : ${error.error} `;
    }
    // // Devuelve un Observable con con un mensaje de error
    return throwError(" Algo malo paso; intente mas tarde por favor ");
  }

}
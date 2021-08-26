/*<summary>
 * Exporta el modelo encargado de manejar el listado de peliculas que retorna el API
 *</summary>*/
 export class listaPeliculas {

    constructor(
                public title?: string,
                public description?: string,
                public programType?: string,
                public images?: {
                    postArt?: {
                        url?: string,
                        width?: number,
                        height?: number
                    } 
                },
                releaseYear?: number
    ) { }
  
  }
  
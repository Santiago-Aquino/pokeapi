import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient) { }

  //Con este servicio utilizo un cliente http para poder traerme los datos con el metodo get desde
  // la api de "PokeApi"
  getPokemon(id:number | null | string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }
}

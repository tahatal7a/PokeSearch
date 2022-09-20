import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  constructor( private http: HttpClient) { }
//fonction to get the pokemons from API
getPokemons(name: string){
  return this.http.get('${this.url}/${name}')
}

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../data/data.service';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css']
})
export class AllPokemonsComponent implements OnInit {
  name: string 
  urlimg: string
  constructor(private pokemonService : PokemonService) { 
  }

  ngOnInit(): void {
  }

  search(){
    this.pokemonService.getPokemons(this.name).subscribe((data:any) =>{
        this.urlimg= data.sprites.front_default
    })
  }

}

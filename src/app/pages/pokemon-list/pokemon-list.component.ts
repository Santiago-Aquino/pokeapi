import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  public pokemonIds: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  public pokemonData: any[] = [];
  public orderByField: string = 'id';
  public setOrder: string = 'asc'

  constructor(private service: PokemonService){}

  ngOnInit(): void {
    this.getPokemonData();
  }

  // Me traigo la data del servicio de pokemon y la almaceno
  getPokemonData() {
    for (const id of this.pokemonIds) {
      this.service.getPokemon(id)
        .subscribe(data => {
          this.pokemonData.push(data);
        });
    }
  }

  //fucion que ordena los pokemons dependiendo el campo y si es asc o desc
  changeOrderByField(field: string, order:string) {
    this.orderByField = field
    if (order == 'desc') this.pokemonData.sort((a,b) => b[this.orderByField] - a[this.orderByField]);
    else this.pokemonData.sort((a,b) => a[this.orderByField] - b[this.orderByField]);
  }
}

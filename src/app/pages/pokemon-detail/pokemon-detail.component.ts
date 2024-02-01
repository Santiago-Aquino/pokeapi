import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  public pokemonDetail$!: Observable<any>
  constructor(private route: ActivatedRoute, private service: PokemonService) {}


  // Me traigo la data del servicio de pokemons y la almaceno
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      this.pokemonDetail$ = this.service.getPokemon(id)
    })
  }
}

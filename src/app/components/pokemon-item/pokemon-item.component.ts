import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
  //Creo el input que va a recibir para tomar la informacion
  @Input() pokemonInfo!: any
}

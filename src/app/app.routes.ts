import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [{ path: '', component: PokemonListComponent }, {path: 'detail/:id', component: PokemonDetailComponent}];

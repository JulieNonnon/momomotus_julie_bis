import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [

  {path: '', component: HomeComponent }, //page d'accueil par défaut
  {path: 'game', component: GameComponent}, //page du motus
  {path: '**', redirectTo:''} // redirection vers page accueil

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

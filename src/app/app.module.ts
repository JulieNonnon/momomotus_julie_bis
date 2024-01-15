import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModaleRulesComponent } from './components/modale-rules/modale-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameInputComponent,
    HomeComponent,
    GameComponent,
    ModaleRulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

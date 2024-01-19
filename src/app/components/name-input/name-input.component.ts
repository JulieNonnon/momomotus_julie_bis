import { Component } from '@angular/core';
import { SetPrenomService } from '../../services/set-prenom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.css'
})
export class NameInputComponent {
  
  prenom: string = '';

  constructor( private router: Router) { }

  registerName() {

    //Condition: le champ du prenom ne doit pas être vide
    if (this.prenom !== '') {

    this.router.navigate(['/game']); // navigation vers page Game
    localStorage.setItem('prenom', this.prenom); // prenom stocké dans le local Storage
    console.log('Prénom validé :', this.prenom);

    } else {
      // dans le cas où le champ est vide:
      alert('Merci de renseigner un prenom');
    }

  }

  isValidInput(): boolean {
    // Utiliser trim() pour supprimer les espaces avant et après le nom
    return this.prenom.trim() !== '';
  }
  
}

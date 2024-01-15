import { Component, OnInit } from '@angular/core';
import { SetPrenomService } from '../../services/set-prenom.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  //constructor(private setPrenom: SetPrenomService) { }

  // get playerPrenom(): string {
  //   return '${this.setPrenomService.prenom}'
  // }

  prenom: string = '';

  //récupération du prénom du Local Storage dès le chargement de la page Game
  ngOnInit() {
    this.prenom = localStorage.getItem('prenom') || ''; 
  }

  //modale des règles du motus
  modalVisible = false;

  openModaleRules() {
    this.modalVisible = true;
  }

  closeModaleRules() {
    this.modalVisible = false;
  }

}


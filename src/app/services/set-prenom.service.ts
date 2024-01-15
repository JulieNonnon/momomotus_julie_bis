import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetPrenomService {

constructor() { }

prenom: string = '';

setPrenom(newPrenom: string) {
  this.prenom = newPrenom;
}

}
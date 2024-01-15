import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modale-rules',
  templateUrl: './modale-rules.component.html',
  styleUrl: './modale-rules.component.css'
})
export class ModaleRulesComponent {

  @Input() isModalVisible = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.isModalVisible = false;
    this.closeModalEvent.emit(); // émet un événement pour informer le composant header
  }
}

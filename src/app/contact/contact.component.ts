import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  UNLabel: number = 0;
  UALabel: number = 0;
  UELabel: number = 0;
  UPLabel: number = 0;

  displayUN() {
    this.UNLabel = 1;
  }

  displayUA() {
    this.UALabel = 1;
  }
  displayUE() {
    this.UELabel = 1;
  }
  displayUP() {
    this.UPLabel = 1;
  }

  hide() {
    this.UNLabel = 0;
    this.UALabel = 0;
    this.UELabel = 0;
    this.UPLabel = 0;
  }
}

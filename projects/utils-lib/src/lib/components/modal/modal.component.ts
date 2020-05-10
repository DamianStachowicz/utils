import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() overlayClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}

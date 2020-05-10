import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals-demo',
  templateUrl: './modals-demo.component.html',
  styleUrls: ['./modals-demo.component.scss'],
})
export class ModalsDemoComponent {
  modalOpen = false;
  dialogBgColor: '#fbfcff' | '#17619e' = '#fbfcff';
  dialogTxtColor: '#fbfcff' | '#000000' = '#000000';

  openDoubleBtnDialog() {
    this.modalOpen = true;
    this.dialogBgColor = '#fbfcff';
    this.dialogTxtColor = '#000000';
  }

  toggleDialogColors() {
    this.dialogBgColor =
      this.dialogBgColor === '#fbfcff' ? '#17619e' : '#fbfcff';
    this.dialogTxtColor =
      this.dialogTxtColor === '#000000' ? '#fbfcff' : '#000000';
  }
}

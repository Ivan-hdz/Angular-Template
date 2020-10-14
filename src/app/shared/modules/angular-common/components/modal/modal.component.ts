

import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }

  onYesClick() {
    this.dialogRef.close(true)
  }
}
export class ModalData {
  constructor(
    public title: string = '',
    public description: string = '',
    public okText: string = '',
    public cancelText: string = ''
  ) { }
}


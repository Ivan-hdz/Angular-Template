

import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  public descripcion_lista: Array<string>;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) {
    this.descripcion_lista = [];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.data.fields.forEach((f) => {
      f.value = '';
    })
    if (this.data.listBy !== '') {
      this.descripcion_lista = this.data.description.split(this.data.listBy);
    }
  }

}
export class ModalData {
  constructor(
    public fields: Field[] = [],
    public title: string = '',
    public description: string = '',
    public okText: string = '',
    public cancelText: string = '',
    public listBy: string = ''
  ) { }
}
export enum FieldType {
  NUMERIC = 'number',
  TEXT = 'text',
  DATE = 'date',
  PASS = 'password',
  EMAIL = 'email',
  STEPS = 'steps',
  COMBO = 'combo'
}
export class Field {
  public comboOptions: DisplayedValuePair[];
  constructor(
    public name: string = '',
    public type: FieldType | string = FieldType.TEXT,
    public value: any = ''
  ) {}
  setComboOptions(ops) {
    this.comboOptions = ops
  }
}
export class DisplayedValuePair {
  id: string;
  displayed: string;
  value: string;
}

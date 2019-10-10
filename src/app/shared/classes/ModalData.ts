export class ModalData {
  constructor(
    public fields: Field[] = [],
    public title: string = '',
    public description: string = '',
    public okText: string = '',
    public cancelText: string = ''
  ) {}
}
export class Field {
  public static NUMERIC = 'number';
  public static TEXT = 'text';
  public static DATE = 'date';
  public static PASS = 'password';
  constructor(
    public name: string = '',
    public type: string = Field.TEXT,
    public value: any
  ) {}
}

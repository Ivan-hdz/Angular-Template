import {ModalData} from '../modules/angular-common/components/modal/modal.component';

export class Dialogos {
  // TODO definir los dialogos que se mostraran en la app
  static ELEMENTO_ELIMINADO(): ModalData {
    return new ModalData(
      'Éxito', 'El elemento se elimino correctamente',
      'Aceptar'
    );
  }
}

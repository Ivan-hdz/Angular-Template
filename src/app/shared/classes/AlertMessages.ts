import {ModalData} from "../modules/angular-common/components/modal/modal.component";

export class AlertMessages {
  static SUCCESS_MESSAGE(body: string): ModalData {
    return new ModalData(
      [], 'Éxito', body, 'Aceptar'
    );
  }
  static ERROR_MESSAGE(body: string): ModalData {
    return new ModalData(
      [], 'Error', body, 'Aceptar'
    );
  }

  static CONFIRM_DELETE_DIALOG(): ModalData  {
    return new ModalData(
      [], 'Confirmación', '¿Desea eliminar el elemento?',
      'Confirmar', 'Cancelar'
    );
  }

  static SUCCESS_DELETE_DIALOG(): ModalData {
    return new ModalData(
      [], 'Éxito', 'El elemento se elimino correctamente',
      'Aceptar'
    );
  }
}

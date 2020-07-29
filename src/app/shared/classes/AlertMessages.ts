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
}

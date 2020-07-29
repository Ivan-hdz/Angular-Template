import {ModalData} from "../modules/angular-common/components/modal/modal.component";

export class AlertMessages {
  static NOTIFICACION_ENVIADA(): ModalData {
    return new ModalData(
      [], 'Éxito', 'Notificaciones enviadas a todos los dispositivos.', 'Aceptar'
    );
  }
}

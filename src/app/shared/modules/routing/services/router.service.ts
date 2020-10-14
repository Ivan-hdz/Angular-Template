

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AppRoutes} from '../enums/AppRoutes';
@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private urlAnterior = '';
  constructor(private router: Router) { }
  private ir(url = '/') {
    this.router.navigate([url]);
  }
  irLogin() {
    this.ir(AppRoutes.LOGIN);
  }

  reload() {
    location.reload();
  }
  getUrl() {
    return this.router.url;
  }
  // TODO Replace the routes with your methods
  // Bienvenida
  irBienvenida() {
    this.ir(AppRoutes.HOME);
  }
  // Cuentas

  irSeleccionarPerfil() {
    this.ir(AppRoutes.SELECCION_PERFIL);
  }
  irEditarCuenta(id) {
    this.ir(AppRoutes.EDITAR_CUENTA + id);
  }
  irVisualizarCuentas(id) {
    this.ir(AppRoutes.VISUALIZAR_CUENTA + id);
  }
  irConsultarCuentas() {
    this.ir(AppRoutes.CONSULTAR_CUENTA);
  }

  irCrearCuenta() {
    this.ir(AppRoutes.CREAR_CUENTA);
  }
  irCambiarContra(id) {
    this.ir(AppRoutes.CAMBIAR_CONTRASENA + id);
  }
  // Pacientes
  irCrearPaciente() {
    this.ir(AppRoutes.CREAR_PACIENTE);
  }
  irEditarPaciente(id) {
    this.ir(AppRoutes.EDITAR_PACIENTE + id);
  }
  irConsultarPacientes() {
    this.ir(AppRoutes.CONSULTAR_PACIENTES);
  }
  irVisualizarPacientes(id) {
    this.ir(AppRoutes.VISUALIZAR_PACIENTE + id);
  }

  irConsultarProtocolos() {
    this.ir(AppRoutes.CONSULTAR_PROTOCOLOS);
  }
}

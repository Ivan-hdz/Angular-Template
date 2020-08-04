

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private urlAnterior = '';

  constructor(private router: Router) { }
  irConsole(url = '/') {
    this.router.navigate(['/console' + url]);
  }
  irNotificationSender() {
    this.router.navigate(['/console/notifications']);
  }
  irNotificationHistory() {
    this.router.navigate(['/console/notifications/history']);
  }
  irNotificationSchedule() {
    this.router.navigate(['/console/notifications/schedule']);
  }
  irNotificationScheduled() {
    this.router.navigate(['/console/notifications/scheduled']);
  }
  irCrearServicio() {
    this.router.navigate(['/console/venues/add']);
  }
  irEditarServicio() {
    this.router.navigate(['/console/venues/edit']);
  }
  irConsultarServicios() {
    this.router.navigate(['/console/venues']);
  }
  irLanding(url = '/') {
    this.router.navigate([url]);
  }

}



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
  irLanding(url = '/') {
    this.router.navigate([url]);
  }

}

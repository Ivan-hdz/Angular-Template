

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private urlAnterior = '';

  constructor(private router: Router) { }
  private irConsole(url = '/') {
    this.router.navigate(['/console' + url]);
  }
  private irLanding(url = '/') {
    this.router.navigate([url]);
  }

}

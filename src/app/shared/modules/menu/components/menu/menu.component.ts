

import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterService} from "../../../routing/services/router.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {MatDrawer} from "@angular/material/sidenav";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('drawer', {static: true}) drawer: MatDrawer;
  public mode;
  public shouldHaveMenu = false;
  public tieneMuchosPerfiles: boolean;
  public puedeCambiarPerfil: boolean;
  constructor(public breakpointObserver: BreakpointObserver,
              public router: RouterService) {
    this.mode = 'side';
    this.tieneMuchosPerfiles = false;
    this.puedeCambiarPerfil = false;
  }
  private ponerResponsive() {
    // css breakpoint
    this.breakpointObserver
      .observe(['(min-width: 720px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mode = 'side';
          if (this.shouldHaveMenu) {
            this.drawer.open();
          }
        } else {
          this.mode = 'over';
          this.drawer.close();
        }
      });
  }

  private alternarMenuSegunModoResponsive() {
    if (this.mode === 'over') {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
    this.shouldHaveMenu = true;
  }
  private deshabilitarMenu() {
    this.tieneMuchosPerfiles = false;
    this.drawer.close();
    this.shouldHaveMenu = false;
  }
  ngOnInit() {
    // open or close when Usuario is logged in/out

    this.ponerResponsive();
    this.alternarMenuSegunModoResponsive();
  }

}

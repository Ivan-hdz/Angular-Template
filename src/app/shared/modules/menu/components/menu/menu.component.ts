

import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterService} from "../../../routing/services/router.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {MatDrawer} from "@angular/material/sidenav";
import {UserService} from "../../../../services/user.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('drawer', {static: true}) drawer: MatDrawer;
  public mode;
  public shouldHaveMenu = false;
  constructor(public breakpointObserver: BreakpointObserver,
              private userService: UserService,
              public router: RouterService) {
    this.mode = 'side';
  }
  private ponerResponsive() {
    // css breakpoint
    this.breakpointObserver
      .observe(['(min-width: 720px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mode = 'side';
          console.log(this.shouldHaveMenu)
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
  }
  private deshabilitarMenu() {
    this.shouldHaveMenu = false;
  }
  private habilitarMenu() {
    this.shouldHaveMenu = true;
  }
  logout() {
    this.userService.logout();
  }
  ngOnInit() {
    // open or close when Usuario is logged in/out
    this.userService.getUserObservable().subscribe((usr) => {
      if (usr === null || usr === undefined) {
        this.deshabilitarMenu();
      } else {
        this.habilitarMenu();
      }

    });
    this.ponerResponsive();
    this.alternarMenuSegunModoResponsive();
  }

}

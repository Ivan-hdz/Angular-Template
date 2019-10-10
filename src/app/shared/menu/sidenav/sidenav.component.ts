import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public mobileLayout = false;
  constructor(
    public router: RouterService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 1020px)'])
      .subscribe( (state: BreakpointState) => {
        if (state.matches) {
          this.mobileLayout = true;
        } else {
          this.mobileLayout = false;
        }
      });
  }

}

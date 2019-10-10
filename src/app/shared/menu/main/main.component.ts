
import {RouterService} from '../../services/router.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';



@Component({
  selector: 'app-menu',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('drawer', {static: true}) private drawer: MatDrawer;
  public menuCollapsed = false;
  constructor(
    public router: RouterService,
    private breakpointObserver: BreakpointObserver
  ) {
  }


  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 1020px)'])
      .subscribe( (state: BreakpointState) => {
        if (state.matches) {
          this.menuCollapsed = true;
        } else {
          this.menuCollapsed = false;
        }
      });
  }



}

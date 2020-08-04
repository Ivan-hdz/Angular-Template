import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-with-footer-and-header',
  templateUrl: './page-with-footer-and-header.component.html',
  styleUrls: ['./page-with-footer-and-header.component.scss']
})
export class PageWithFooterAndHeaderComponent implements OnInit {
  @Input()
  icon_name: string;
  @Input()
  page_title: string;
  constructor() { }

  ngOnInit(): void {
  }

}

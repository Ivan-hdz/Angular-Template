import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithFooterAndHeaderComponent } from './page-with-footer-and-header.component';

describe('PageWithFooterAndHeaderComponent', () => {
  let component: PageWithFooterAndHeaderComponent;
  let fixture: ComponentFixture<PageWithFooterAndHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithFooterAndHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithFooterAndHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

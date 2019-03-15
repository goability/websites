import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenuTopComponent } from './navmenu-top.component';

describe('NavmenuTopComponent', () => {
  let component: NavmenuTopComponent;
  let fixture: ComponentFixture<NavmenuTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmenuTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

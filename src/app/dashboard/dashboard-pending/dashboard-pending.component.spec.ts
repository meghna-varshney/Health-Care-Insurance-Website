import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPendingComponent } from './dashboard-pending.component';

describe('DashboardPendingComponent', () => {
  let component: DashboardPendingComponent;
  let fixture: ComponentFixture<DashboardPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

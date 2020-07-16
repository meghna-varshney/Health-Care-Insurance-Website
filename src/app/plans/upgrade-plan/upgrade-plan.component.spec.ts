import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePlanComponent } from './upgrade-plan.component';

describe('UpgradePlanComponent', () => {
  let component: UpgradePlanComponent;
  let fixture: ComponentFixture<UpgradePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

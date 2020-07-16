import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetComponent } from './plan-det.component';

describe('PlanDetComponent', () => {
  let component: PlanDetComponent;
  let fixture: ComponentFixture<PlanDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

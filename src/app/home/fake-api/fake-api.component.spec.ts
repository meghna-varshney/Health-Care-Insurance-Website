import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiComponent } from './fake-api.component';

describe('FakeApiComponent', () => {
  let component: FakeApiComponent;
  let fixture: ComponentFixture<FakeApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

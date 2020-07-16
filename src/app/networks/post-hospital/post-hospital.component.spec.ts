import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHospitalComponent } from './post-hospital.component';

describe('PostHospitalComponent', () => {
  let component: PostHospitalComponent;
  let fixture: ComponentFixture<PostHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

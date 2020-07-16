import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDoctorsComponent } from './post-doctors.component';

describe('PostDoctorsComponent', () => {
  let component: PostDoctorsComponent;
  let fixture: ComponentFixture<PostDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

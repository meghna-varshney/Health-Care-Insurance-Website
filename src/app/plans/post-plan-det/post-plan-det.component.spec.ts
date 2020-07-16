import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlanDetComponent } from './post-plan-det.component';

describe('PostPlanDetComponent', () => {
  let component: PostPlanDetComponent;
  let fixture: ComponentFixture<PostPlanDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPlanDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlanDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

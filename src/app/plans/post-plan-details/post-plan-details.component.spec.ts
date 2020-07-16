import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlanDetailsComponent } from './post-plan-details.component';

describe('PostPlanDetailsComponent', () => {
  let component: PostPlanDetailsComponent;
  let fixture: ComponentFixture<PostPlanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPlanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

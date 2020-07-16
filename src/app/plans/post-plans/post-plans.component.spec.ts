import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlansComponent } from './post-plans.component';

describe('PostPlansComponent', () => {
  let component: PostPlansComponent;
  let fixture: ComponentFixture<PostPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

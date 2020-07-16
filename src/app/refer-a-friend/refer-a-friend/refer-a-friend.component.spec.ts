import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferAFriendComponent } from './refer-a-friend.component';

describe('ReferAFriendComponent', () => {
  let component: ReferAFriendComponent;
  let fixture: ComponentFixture<ReferAFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferAFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferAFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

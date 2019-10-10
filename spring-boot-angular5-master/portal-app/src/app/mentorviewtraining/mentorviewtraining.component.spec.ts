import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorviewtrainingComponent } from './mentorviewtraining.component';

describe(' MentorviewtrainingComponent ', () => {
  let component:  MentorviewtrainingComponent ;
  let fixture: ComponentFixture< MentorviewtrainingComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  MentorviewtrainingComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( MentorviewtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

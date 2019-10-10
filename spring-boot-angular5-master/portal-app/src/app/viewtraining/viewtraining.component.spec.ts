import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrainingComponent } from './viewtraining.component';

describe('ViewtrainingComponent', () => {
  let component: ViewtrainingComponent;
  let fixture: ComponentFixture<ViewtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

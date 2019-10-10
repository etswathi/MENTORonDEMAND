import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtechnologyComponent } from './viewtechnology.component';

describe('ViewtechnologyComponent', () => {
  let component: ViewtechnologyComponent;
  let fixture: ComponentFixture<ViewtechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtechnologyComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

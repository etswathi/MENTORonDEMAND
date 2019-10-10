import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserbyidComponent } from './viewuserbyid.component';

describe('ViewuserbyidComponent', () => {
  let component: ViewuserbyidComponent;
  let fixture: ComponentFixture<ViewuserbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRoutComponent } from './first-rout.component';

describe('FirstRoutComponent', () => {
  let component: FirstRoutComponent;
  let fixture: ComponentFixture<FirstRoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

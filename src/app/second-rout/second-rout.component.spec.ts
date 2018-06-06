import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRoutComponent } from './second-rout.component';

describe('SecondRoutComponent', () => {
  let component: SecondRoutComponent;
  let fixture: ComponentFixture<SecondRoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondRoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

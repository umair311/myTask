import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpaswordComponent } from './fpasword.component';

describe('FpaswordComponent', () => {
  let component: FpaswordComponent;
  let fixture: ComponentFixture<FpaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

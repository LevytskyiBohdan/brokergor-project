import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoCarComponent } from './cargo-car.component';

describe('CargoCarComponent', () => {
  let component: CargoCarComponent;
  let fixture: ComponentFixture<CargoCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

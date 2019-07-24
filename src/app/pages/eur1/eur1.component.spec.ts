import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eur1Component } from './eur1.component';

describe('Eur1Component', () => {
  let component: Eur1Component;
  let fixture: ComponentFixture<Eur1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eur1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoNuevoComponent } from './turno-nuevo.component';

describe('TurnoNuevoComponent', () => {
  let component: TurnoNuevoComponent;
  let fixture: ComponentFixture<TurnoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

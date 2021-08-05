import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDetalleComponent } from './historia-detalle.component';

describe('HistoriaDetalleComponent', () => {
  let component: HistoriaDetalleComponent;
  let fixture: ComponentFixture<HistoriaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosEliminadosComponent } from './listado-usuarios-eliminados.component';

describe('ListadoUsuariosEliminadosComponent', () => {
  let component: ListadoUsuariosEliminadosComponent;
  let fixture: ComponentFixture<ListadoUsuariosEliminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoUsuariosEliminadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuariosEliminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

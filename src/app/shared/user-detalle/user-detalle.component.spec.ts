import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetalleComponent } from './user-detalle.component';

describe('UserDetalleComponent', () => {
  let component: UserDetalleComponent;
  let fixture: ComponentFixture<UserDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

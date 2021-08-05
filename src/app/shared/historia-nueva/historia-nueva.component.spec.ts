import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaNuevaComponent } from './historia-nueva.component';

describe('HistoriaNuevaComponent', () => {
  let component: HistoriaNuevaComponent;
  let fixture: ComponentFixture<HistoriaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaNuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

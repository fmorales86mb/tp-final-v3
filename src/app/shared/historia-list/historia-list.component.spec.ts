import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaListComponent } from './historia-list.component';

describe('HistoriaListComponent', () => {
  let component: HistoriaListComponent;
  let fixture: ComponentFixture<HistoriaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenItemComponent } from './examen-item.component';

describe('ExamenItemComponent', () => {
  let component: ExamenItemComponent;
  let fixture: ComponentFixture<ExamenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

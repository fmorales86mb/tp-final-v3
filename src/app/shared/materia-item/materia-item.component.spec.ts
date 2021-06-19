import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaItemComponent } from './materia-item.component';

describe('MateriaItemComponent', () => {
  let component: MateriaItemComponent;
  let fixture: ComponentFixture<MateriaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

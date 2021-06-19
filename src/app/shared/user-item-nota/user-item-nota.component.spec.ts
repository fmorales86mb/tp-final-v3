import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemNotaComponent } from './user-item-nota.component';

describe('UserItemNotaComponent', () => {
  let component: UserItemNotaComponent;
  let fixture: ComponentFixture<UserItemNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

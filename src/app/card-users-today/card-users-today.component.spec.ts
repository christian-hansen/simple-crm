import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsersTodayComponent } from './card-users-today.component';

describe('CardUsersTodayComponent', () => {
  let component: CardUsersTodayComponent;
  let fixture: ComponentFixture<CardUsersTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUsersTodayComponent]
    });
    fixture = TestBed.createComponent(CardUsersTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

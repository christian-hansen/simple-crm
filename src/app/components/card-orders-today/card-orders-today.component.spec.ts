import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrdersTodayComponent } from './card-orders-today.component';

describe('CardOrdersTodayComponent', () => {
  let component: CardOrdersTodayComponent;
  let fixture: ComponentFixture<CardOrdersTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOrdersTodayComponent]
    });
    fixture = TestBed.createComponent(CardOrdersTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

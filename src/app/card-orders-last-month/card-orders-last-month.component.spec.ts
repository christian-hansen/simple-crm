import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrdersLastMonthComponent } from './card-orders-last-month.component';

describe('CardOrdersLastMonthComponent', () => {
  let component: CardOrdersLastMonthComponent;
  let fixture: ComponentFixture<CardOrdersLastMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOrdersLastMonthComponent]
    });
    fixture = TestBed.createComponent(CardOrdersLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

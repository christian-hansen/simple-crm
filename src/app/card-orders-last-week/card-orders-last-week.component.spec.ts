import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrdersLastWeekComponent } from './card-orders-last-week.component';

describe('CardOrdersLastWeekComponent', () => {
  let component: CardOrdersLastWeekComponent;
  let fixture: ComponentFixture<CardOrdersLastWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOrdersLastWeekComponent]
    });
    fixture = TestBed.createComponent(CardOrdersLastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

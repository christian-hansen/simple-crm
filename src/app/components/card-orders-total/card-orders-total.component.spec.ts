import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrdersTotalComponent } from './card-orders-total.component';

describe('CardOrdersTotalComponent', () => {
  let component: CardOrdersTotalComponent;
  let fixture: ComponentFixture<CardOrdersTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOrdersTotalComponent]
    });
    fixture = TestBed.createComponent(CardOrdersTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

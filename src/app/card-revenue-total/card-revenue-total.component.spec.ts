import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRevenueTotalComponent } from './card-revenue-total.component';

describe('CardRevenueTotalComponent', () => {
  let component: CardRevenueTotalComponent;
  let fixture: ComponentFixture<CardRevenueTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRevenueTotalComponent]
    });
    fixture = TestBed.createComponent(CardRevenueTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

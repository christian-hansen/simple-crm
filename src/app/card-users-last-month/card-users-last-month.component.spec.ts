import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsersLastMonthComponent } from './card-users-last-month.component';

describe('CardUsersLastMonthComponent', () => {
  let component: CardUsersLastMonthComponent;
  let fixture: ComponentFixture<CardUsersLastMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUsersLastMonthComponent]
    });
    fixture = TestBed.createComponent(CardUsersLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

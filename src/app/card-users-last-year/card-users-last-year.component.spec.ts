import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsersLastYearComponent } from './card-users-last-year.component';

describe('CardUsersLastYearComponent', () => {
  let component: CardUsersLastYearComponent;
  let fixture: ComponentFixture<CardUsersLastYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUsersLastYearComponent]
    });
    fixture = TestBed.createComponent(CardUsersLastYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsersLastWeekComponent } from './card-users-last-week.component';

describe('CardUsersLastWeekComponent', () => {
  let component: CardUsersLastWeekComponent;
  let fixture: ComponentFixture<CardUsersLastWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUsersLastWeekComponent]
    });
    fixture = TestBed.createComponent(CardUsersLastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

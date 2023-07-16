import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsersTotalComponent } from './card-users-total.component';

describe('CardUsersTotalComponent', () => {
  let component: CardUsersTotalComponent;
  let fixture: ComponentFixture<CardUsersTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUsersTotalComponent]
    });
    fixture = TestBed.createComponent(CardUsersTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

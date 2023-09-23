import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUsersOverTimeComponent } from './chart-users-over-time.component';

describe('ChartUsersOverTimeComponent', () => {
  let component: ChartUsersOverTimeComponent;
  let fixture: ComponentFixture<ChartUsersOverTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartUsersOverTimeComponent]
    });
    fixture = TestBed.createComponent(ChartUsersOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOrdersOvertimeComponent } from './chart-orders-overtime.component';

describe('ChartOrdersOvertimeComponent', () => {
  let component: ChartOrdersOvertimeComponent;
  let fixture: ComponentFixture<ChartOrdersOvertimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartOrdersOvertimeComponent]
    });
    fixture = TestBed.createComponent(ChartOrdersOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

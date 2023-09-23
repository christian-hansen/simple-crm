import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalesDataComponent } from './dashboard-sales-data.component';

describe('DashboardSalesDataComponent', () => {
  let component: DashboardSalesDataComponent;
  let fixture: ComponentFixture<DashboardSalesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSalesDataComponent]
    });
    fixture = TestBed.createComponent(DashboardSalesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

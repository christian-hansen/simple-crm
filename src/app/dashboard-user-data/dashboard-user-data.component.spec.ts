import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserDataComponent } from './dashboard-user-data.component';

describe('DashboardUserDataComponent', () => {
  let component: DashboardUserDataComponent;
  let fixture: ComponentFixture<DashboardUserDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserDataComponent]
    });
    fixture = TestBed.createComponent(DashboardUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChartTimeperiodService } from './chart-timeperiod.service';

describe('ChartTimeperiodService', () => {
  let service: ChartTimeperiodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartTimeperiodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

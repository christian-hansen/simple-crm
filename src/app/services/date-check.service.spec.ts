import { TestBed } from '@angular/core/testing';

import { DateCheckService } from './date-check.service';

describe('DateCheckService', () => {
  let service: DateCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

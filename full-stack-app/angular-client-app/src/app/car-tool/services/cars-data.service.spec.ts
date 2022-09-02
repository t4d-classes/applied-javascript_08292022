import { TestBed } from '@angular/core/testing';

import { CarsDataService } from './cars-data.service';

describe('CarsDataService', () => {
  let service: CarsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

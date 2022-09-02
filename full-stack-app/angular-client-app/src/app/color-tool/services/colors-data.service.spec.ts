import { TestBed } from '@angular/core/testing';

import { ColorsDataService } from './colors-data.service';

describe('ColorsDataService', () => {
  let service: ColorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

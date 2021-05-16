import { TestBed } from '@angular/core/testing';

import { BorrowerService } from './borrower.service';

describe('BorrowerService', () => {
  let service: BorrowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

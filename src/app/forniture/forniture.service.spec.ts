import { TestBed } from '@angular/core/testing';

import { FornitureService } from './forniture.service';

describe('FornitureService', () => {
  let service: FornitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

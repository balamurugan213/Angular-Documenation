import { TestBed } from '@angular/core/testing';

import { HamletService } from './hamlet.service';

describe('HamletService', () => {
  let service: HamletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

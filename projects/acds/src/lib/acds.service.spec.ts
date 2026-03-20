import { TestBed } from '@angular/core/testing';

import { AcdsService } from './acds.service';

describe('AcdsService', () => {
  let service: AcdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

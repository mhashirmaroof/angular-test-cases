import { TestBed } from '@angular/core/testing';

import { MockespyserviceService } from './mockespyservice.service';

describe('MockespyserviceService', () => {
  let service: MockespyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockespyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

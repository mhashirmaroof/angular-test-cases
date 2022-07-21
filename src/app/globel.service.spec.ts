import { TestBed } from '@angular/core/testing';

import { GlobelService } from './globel.service';

describe('GlobelService', () => {
  let service: GlobelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

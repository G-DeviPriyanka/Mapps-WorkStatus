import { TestBed } from '@angular/core/testing';

import { DeactivateserviceService } from './deactivateservice.service';

describe('DeactivateserviceService', () => {
  let service: DeactivateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

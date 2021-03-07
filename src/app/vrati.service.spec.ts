import { TestBed } from '@angular/core/testing';

import { VratiService } from './vrati.service';

describe('VratiService', () => {
  let service: VratiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VratiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

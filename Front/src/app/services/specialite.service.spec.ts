import { TestBed } from '@angular/core/testing';

import { SpecialiteService } from './specialite.service';

describe('SpecialiteService', () => {
  let service: SpecialiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

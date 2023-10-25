import { TestBed } from '@angular/core/testing';

import { ChapitreService } from './chapitre.service';

describe('ChapitreService', () => {
  let service: ChapitreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapitreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

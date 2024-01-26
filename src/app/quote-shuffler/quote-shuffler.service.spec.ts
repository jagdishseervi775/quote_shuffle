import { TestBed } from '@angular/core/testing';

import { QuoteShufflerService } from './quote-shuffler.service';

describe('QuoteShufflerService', () => {
  let service: QuoteShufflerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteShufflerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

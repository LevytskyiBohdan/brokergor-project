import { TestBed } from '@angular/core/testing';

import { NewsDetailsService } from './news-details.service';

describe('NewsDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsDetailsService = TestBed.get(NewsDetailsService);
    expect(service).toBeTruthy();
  });
});

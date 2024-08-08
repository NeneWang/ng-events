import { TestBed } from '@angular/core/testing';

import { ArtshowService } from './artshow.service';

describe('ArtshowService', () => {
  let service: ArtshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

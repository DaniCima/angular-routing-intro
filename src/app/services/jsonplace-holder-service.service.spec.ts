import { TestBed } from '@angular/core/testing';

import { JSONPlaceHolderServiceService } from './jsonplace-holder-service.service';

describe('JSONPlaceHolderServiceService', () => {
  let service: JSONPlaceHolderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONPlaceHolderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

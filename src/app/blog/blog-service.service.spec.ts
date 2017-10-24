import { TestBed, inject } from '@angular/core/testing';

import { BlogServiceService } from './blog-service.service';

describe('BlogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogServiceService]
    });
  });

  it('should be created', inject([BlogServiceService], (service: BlogServiceService) => {
    expect(service).toBeTruthy();
  }));
});

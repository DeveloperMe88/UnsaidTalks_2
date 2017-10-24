import { TestBed, inject } from '@angular/core/testing';

import { InterviewsService } from './interviews.service';

describe('InterviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewsService]
    });
  });

  it('should be created', inject([InterviewsService], (service: InterviewsService) => {
    expect(service).toBeTruthy();
  }));
});

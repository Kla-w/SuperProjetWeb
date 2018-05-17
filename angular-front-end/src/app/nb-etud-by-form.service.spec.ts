import { TestBed, inject } from '@angular/core/testing';

import { NbEtudByFormService } from './nb-etud-by-form.service';

describe('NbEtudByFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbEtudByFormService]
    });
  });

  it('should be created', inject([NbEtudByFormService], (service: NbEtudByFormService) => {
    expect(service).toBeTruthy();
  }));
});

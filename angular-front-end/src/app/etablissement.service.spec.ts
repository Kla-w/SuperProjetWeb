import { TestBed, inject } from '@angular/core/testing';

import { EtablissementService } from './etablissement.service';

describe('EtablissementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtablissementService]
    });
  });

  it('should be created', inject([EtablissementService], (service: EtablissementService) => {
    expect(service).toBeTruthy();
  }));
});

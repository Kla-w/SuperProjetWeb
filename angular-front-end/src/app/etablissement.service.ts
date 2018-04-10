import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Etablissement } from './univ-map/etablissement';
import { Etabs } from './univ-map/mock-etabs';

@Injectable()
export class EtablissementService {

  constructor() { }

  getEtabs(): Observable<Etablissement[]> {
    return of(Etabs);
  }

}

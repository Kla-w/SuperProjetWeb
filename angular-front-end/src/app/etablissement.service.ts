import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EtablissementComponent } from './etablissement/etablissement.component';
import { Etablissement } from './univ-map/etablissement';
import { Etabs } from './univ-map/mock-etabs';

@Injectable()
export class EtablissementService {

  constructor(private http: HttpClient) { }

  getEtablissements() : Observable<EtablissementComponent[]> {
    return this.http.get<EtablissementComponent[]>('assets/etablissements.json');
  }

  getEtabs(): Observable<Etablissement[]> {
    return of(Etabs);
  }

}


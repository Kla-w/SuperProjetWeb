import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Formation } from './formation-m/formation';
import { AvisMasterRequest } from './avis-master/avisMasterRequest';


@Injectable()
export class AvisService {

  constructor(private http: HttpClient) { }

  getAvis(): Observable<AvisMasterRequest[]> {
    return this.http.get<AvisMasterRequest[]>('assets/status.json');
  }

  addAvis(avis: AvisMasterRequest): Observable<AvisMasterRequest> {
    return this.http.post<AvisMasterRequest>("http://127.0.0.1:8000/avis/add", avis);
  }
}

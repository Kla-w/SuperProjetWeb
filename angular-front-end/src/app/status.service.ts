import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Formation } from './formation-m/formation';
import { Status } from '../app/avis-master/status';

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) { }

  getStatus() : Observable<Status[]> {
    return this.http.get<Status[]>('assets/status.json');
  }

}

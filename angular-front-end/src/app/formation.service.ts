import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormationComponent } from './formation/formation.component';

@Injectable()
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormations() : Observable<FormationComponent[]> {
    return this.http.get<FormationComponent[]>('assets/masters.json');
  }

}

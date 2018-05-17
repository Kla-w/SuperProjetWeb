import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Formation } from './formation-m/formation';
import { Specialite } from './specialite';

@Injectable()
export class SpecialitesService {

  constructor(private http: HttpClient) { }

  getSpecialites() : Observable<Specialite[]> {
    return this.http.get<Specialite[]>('assets/specialites.json');
  }

}

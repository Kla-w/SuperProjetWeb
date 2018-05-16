import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Etablissement } from './etablissement-m/etablissement';


@Injectable()
export class EtablissementService {

  constructor(private http: HttpClient) { }

  getEtablissements() : Observable< Etablissement[]> {
    return this.http.get<Etablissement[]>('assets/etablissements.json');
  }
  

 

}


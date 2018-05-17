import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Formation } from './formation-m/formation';


@Injectable()
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormations() : Observable<Formation[]> {
    //return this.http.get<Formation[]>('assets/masters.json');
    return this.http.get<Formation[]>('http://licinfo.univ-jfc.fr:8080/twmprojets/formations');
  }
 
  getFormationsByEtab(id:number) : Observable<Formation[]> {
    //return this.http.get<Formation[]>('assets/masters.json');
    return this.http.get<Formation[]>('http://licinfo.univ-jfc.fr:8080/twmprojets/formationsParEtablissement?id_etab='+id);
  }

  getFormationsById(id:number) : Observable<Formation[]> {
    //return this.http.get<Formation[]>('assets/masters.json');
    return this.http.get<Formation[]>('http://licinfo.univ-jfc.fr:8080/twmprojets/formationsParId?id_formation='+id);
  }

}

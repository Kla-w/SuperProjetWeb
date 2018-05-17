import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class NbEtudByFormService {

  constructor(private http: HttpClient) { }

  getNbEtudByForm() : Observable<any[]> {
    return this.http.get<any[]>('http://licinfo.univ-jfc.fr:8080/twmprojets/nbEtudiantsParFormation');
  }

}

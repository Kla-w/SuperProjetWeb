import { Component, OnInit } from '@angular/core';

import {EtablissementService} from '../etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  etablissements: EtablissementComponent[] = [];

  constructor(private service : EtablissementService) {}

  getEtablissements() : void {
    this.service.getEtablissements().subscribe(
      res => this.etablissements = res
    );
  }

  ngOnInit() {
    this.getEtablissements();

  }

}

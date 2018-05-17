import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../../etablissement.service';
import { Etablissement } from '../etablissement';

@Component({
  selector: 'app-liste-etablissement',
  templateUrl: './liste-etablissement.component.html',
  styleUrls: ['./liste-etablissement.component.css']
})
export class ListeEtablissementComponent implements OnInit {

  etablissements:  Etablissement[] = [];

  constructor(private service : EtablissementService) {}

  getEtablissements() : void {
    this.service.getEtablissements().subscribe(
      res => {
        console.log(res["data"]);
                this.etablissements = res["data"];
             }
    );
  }

  ngOnInit() {
    this.getEtablissements();
  }

}

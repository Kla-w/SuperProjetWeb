import { Component, OnInit } from '@angular/core';
import { SpecialitesService } from '../../specialites.service';
import { Specialite } from '../../specialite';
import { EtablissementService } from '../../etablissement.service';
import { Etablissement } from '../../univ-map/etablissement';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css'],
  providers: [SpecialitesService, EtablissementService]
})
export class AjouterFormationComponent implements OnInit {

  constructor(private specialiteService: SpecialitesService, private etabService: EtablissementService) { }

  specialites: Specialite[] = [];
  etablissements: Etablissement[] = [];

  ngOnInit() {
    this.getSpecialites();
    this.getEtablissements();
    console.log(this.etablissements);
  }

  getSpecialites(): void {

    this.specialiteService.getSpecialites().subscribe(
      res => {
        this.specialites = res;
      }
    );
  }

  getEtablissements(): void {
    this.etabService.getEtablissements().subscribe(
      res => {
        console.log(res["data"]);
        this.etablissements = res["data"];
      }
    );
  }

}

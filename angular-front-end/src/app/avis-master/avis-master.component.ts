import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../etablissement.service';
import { FormationService } from '../formation.service';
import { StatusService } from '../status.service';
import { AvisService } from '../avis.service';
import { Etablissement } from '../etablissement-m/etablissement';
import { Formation } from '../formation-m/formation';
import { Status } from './status';
import { AvisMasterRequest } from './avisMasterRequest';
import * as $ from 'jquery';

@Component({
  selector: 'app-avis-master',
  templateUrl: './avis-master.component.html',
  styleUrls: ['./avis-master.component.css'],
  providers: [StatusService, AvisService]
})
export class AvisMasterComponent implements OnInit {

  etablissements: Etablissement[] = [];
  formations: Formation[] = [];
  status: Status[] = [];
  etablissementSelect: string;
  isValide: boolean = true;

  avis: AvisMasterRequest = new AvisMasterRequest();


  constructor(private etaService: EtablissementService, private formService: FormationService, private statService: StatusService, private avisService: AvisService) { }

  getEtablissements(): void {
    this.etaService.getEtablissements().subscribe(
      ret => {
        let res = ret["data"];
        this.etablissements = res;
      }
    );
  }

  onSelectEtab(name: string): void {
    this.etablissementSelect = name;
    this.formations = [];
    this.getFormations(name);
    console.log(name);
  }

  getFormations(name: string): void {

    this.formService.getFormations().subscribe(
      ret => {
        let res = ret["data"];
        for (let i = 0; i < res.length; i++) {
          if (res[i].nom_etab == name)
            this.formations.push(res[i]);
        }
      });
  }

  getStatus(): void {
    this.statService.getStatus().subscribe(
      // Fichier Json local
      res => {
        this.status = res;
      }
    );
  }

  onSelectForm(id: number): void {
    this.avis.id_formation = id;
  }

  onSelectStatut(id: number): void {
    this.avis.id_statut = id;
  }

  onSubmit(): void {
    this.isValide = !this.isValide;
    this.avisService.addAvis(this.avis);
  }

  ngOnInit() {

    this.getEtablissements();
    this.getStatus();

  }

}

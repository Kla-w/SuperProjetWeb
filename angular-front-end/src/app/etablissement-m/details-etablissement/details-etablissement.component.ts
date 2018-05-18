import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EtablissementService } from '../../etablissement.service';
import { Etablissement } from '../etablissement';
import { Formation } from '../../formation-m/formation';
import { FormationService } from '../../formation.service';
import { AvisService } from '../../avis.service';

@Component({
  selector: 'app-details-etablissement',
  templateUrl: './details-etablissement.component.html',
  styleUrls: ['./details-etablissement.component.css']
})
export class DetailsEtablissementComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private etablissementService: EtablissementService,
              private formationService : FormationService,
              private avisService : AvisService) {}

  etablissement : Etablissement;
  etablissements : Etablissement[] = [];

  formations : Object[] = []; // {formation, moyenne_campus, moyenne_formation, moyenne_general}


  getEtablissement(id: string) : void {

    let etab : Etablissement;

    this.etablissementService.getEtablissements().subscribe(
      ret => {
        let res = ret["data"];
        for (let i = 0; i < res.length; i++) {
          if (res[i].nom_etab == id) 
            this.etablissement = res[i];
        }
      });
  }

  getFormations(id: string) : void {

    this.formationService.getFormations().subscribe(
      ret => {
        let res = ret["data"];
        for (let i = 0; i < res.length; i++) {
          if (res[i].nom_etab == id) {
            //this.formations.push(res[i]);
            this.getMoyennesFormation(res[i]);
          }
        }
      });
  }

  getMoyennesFormation(formation: Formation) : void {

    this.avisService.getAvis().subscribe(
      res=> {
        let id = formation.id_formation;

        let m_campus = 0;
        let m_formation = 0;
        let m_general = 0;
        let nb_avis = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].id_formation == id) {
            m_campus += res[i].note_campus;
            m_formation += res[i].note_formation;
            m_general += res[i].note_general;
            nb_avis++;
          }
        }

        if (nb_avis > 0) {
          m_campus /= nb_avis;
          m_formation /= nb_avis;
          m_general /= nb_avis;
        }
        this.formations.push({formation: formation, nb_avis: nb_avis, moyenne_campus: m_campus,
                              moyenne_formation: m_formation, moyenne_general: m_general});
      });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getEtablissement(id);
    this.getFormations(id);
  }

}

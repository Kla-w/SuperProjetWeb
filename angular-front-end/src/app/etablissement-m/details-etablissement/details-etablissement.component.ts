import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EtablissementService } from '../../etablissement.service';
import { Etablissement } from '../etablissement';
import { Formation } from '../../formation-m/formation';
import { FormationService } from '../../formation.service';

@Component({
  selector: 'app-details-etablissement',
  templateUrl: './details-etablissement.component.html',
  styleUrls: ['./details-etablissement.component.css']
})
export class DetailsEtablissementComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private etablissementService: EtablissementService,
              private formationService : FormationService) {}

  etablissement : Etablissement;
  formations : Formation[] = [];

  etablissements : Etablissement[] = [];

  getEtablissement(id: number) : void {

    let etab : Etablissement;

    this.etablissementService.getEtablissements().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].id_etablissement == id) 
            this.etablissement = res[i];
        }
      });
  }

  getFormations(id: number) : void {

    this.formationService.getFormations().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].id_formation == id) 
            this.formations.push(res[i]);
        }
      });
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.getEtablissement(id);
    this.getFormations(id);
  }

}

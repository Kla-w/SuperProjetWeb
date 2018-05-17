import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EtablissementService } from '../../etablissement.service';
import { FormationService } from '../../formation.service';
import { Formation } from '../formation';
import { AvisMasterRequest } from '../../avis-master/avisMasterRequest';
import { AvisService } from '../../avis.service';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {

  formation : Formation;

  avis : AvisMasterRequest[] = [];


  constructor(private route: ActivatedRoute,
    private etablissementService: EtablissementService,
    private formationService : FormationService,
    private avisService : AvisService) { }

  getFormation(id : number) : void {

    this.formationService.getFormations().subscribe(
      ret => {
        let res = ret["data"];
        for (let i = 0; i < res.length; i++) {
          if (res[i].id_formation == id) 
            this.formation = res[i];
        }
      });
  }

  getAvis(id : number) : void{
    this.avisService.getAvis().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].id_formation == id) 
            this.avis.push(res[i]);
        } 
      });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    //this.getFormation(id);
    //this.getAvis(id);
  }

}

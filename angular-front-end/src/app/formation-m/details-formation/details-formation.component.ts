import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EtablissementService } from '../../etablissement.service';
import { FormationService } from '../../formation.service';
import { Formation } from '../formation';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {

  formation : Formation;

  constructor(private route: ActivatedRoute,
    private etablissementService: EtablissementService,
    private formationService : FormationService) { }

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

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    
    this.getFormation(id);
  }

}

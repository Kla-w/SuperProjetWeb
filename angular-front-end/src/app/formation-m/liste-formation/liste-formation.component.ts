import { Component, OnInit } from '@angular/core';

import { Formation } from '../formation';
import { FormationService } from '../../formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {
  
  formations: Formation[] = [];

  constructor(private service : FormationService) { }
 
  getFormations() : void {
    this.service.getFormations().subscribe(
      res => this.formations = res
    );
  }

  ngOnInit() {
    this.getFormations();
  }

}

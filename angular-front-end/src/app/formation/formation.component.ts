import { Component, OnInit } from '@angular/core';

import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations: FormationComponent[] = [];

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

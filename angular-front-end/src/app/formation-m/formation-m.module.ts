import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListeFormationComponent, DetailsFormationComponent, AjouterFormationComponent]
})
export class FormationMModule { }

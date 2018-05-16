import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeEtablissementComponent } from './liste-etablissement/liste-etablissement.component';
import { AjouterEtablissementComponent } from './ajouter-etablissement/ajouter-etablissement.component';
import { DetailsEtablissementComponent } from './details-etablissement/details-etablissement.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsEtablissementComponent, ListeEtablissementComponent, AjouterEtablissementComponent]
})
export class EtablissementMModule { }

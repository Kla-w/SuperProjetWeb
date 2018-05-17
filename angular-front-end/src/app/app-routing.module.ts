import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AvisMasterComponent} from './avis-master/avis-master.component';
import { UnivMapComponent } from './univ-map/univ-map.component';

import { ListeEtablissementComponent } from './etablissement-m/liste-etablissement/liste-etablissement.component';
import { AjouterEtablissementComponent } from './etablissement-m/ajouter-etablissement/ajouter-etablissement.component';
import { DetailsEtablissementComponent } from './etablissement-m/details-etablissement/details-etablissement.component';

import { ListeFormationComponent } from './formation-m/liste-formation/liste-formation.component';
import { DetailsFormationComponent } from './formation-m/details-formation/details-formation.component';
import { AjouterFormationComponent } from './formation-m/ajouter-formation/ajouter-formation.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent},
  { path: 'map', component: UnivMapComponent},
 
  { path: 'formation', component: ListeFormationComponent },
  { path: 'formation/ajouter', component: AjouterFormationComponent},
  { path: 'formation/:id', component: DetailsFormationComponent },

  { path: 'etablissement', component: ListeEtablissementComponent },
  { path: 'etablissement/ajouter', component: AjouterEtablissementComponent },
  { path: 'etablissement/:id', component: DetailsEtablissementComponent },

  { path: 'avisMaster', component: AvisMasterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

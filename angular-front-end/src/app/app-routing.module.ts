import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormationComponent } from './formation/formation.component';
import { EtablissementComponent } from './etablissement/etablissement.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'formation', component: FormationComponent },
  { path: 'etablissement', component: EtablissementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

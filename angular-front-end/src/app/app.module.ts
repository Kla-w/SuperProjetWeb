import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AncienEtudiantComponent } from './ancien-etudiant/ancien-etudiant.component';
import { AvisMasterComponent } from './avis-master/avis-master.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { EtablissementService } from './etablissement.service';
import { FormationComponent } from './formation/formation.component';
import { FormationService } from './formation.service';

import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulairesComponent } from './formulaires/formulaires.component';
import { UnivMapComponent } from './univ-map/univ-map.component';
import { MasterListeComponent } from './master-liste/master-liste.component';
import { MarqueurComponent } from './marqueur/marqueur.component';


@NgModule({
  declarations: [
    AppComponent,
    AncienEtudiantComponent,
    AvisMasterComponent,
    EtablissementComponent,
    FormationComponent,
    AccueilComponent,
    FormulairesComponent,
    UnivMapComponent,
    MasterListeComponent,
    MarqueurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    EtablissementService,
    FormationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

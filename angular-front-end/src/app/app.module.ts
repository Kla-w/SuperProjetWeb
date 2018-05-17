import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AncienEtudiantComponent } from './ancien-etudiant/ancien-etudiant.component';
import { AvisMasterComponent } from './avis-master/avis-master.component';
import { EtablissementService } from './etablissement.service';
import { FormationService } from './formation.service';

import { AppRoutingModule } from './/app-routing.module';
import { FormulairesComponent } from './formulaires/formulaires.component';
import { UnivMapComponent } from './univ-map/univ-map.component';
import { MasterListeComponent } from './master-liste/master-liste.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccueilComponent } from './accueil/accueil.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ListeEtablissementComponent } from './etablissement-m/liste-etablissement/liste-etablissement.component';
import { AjouterEtablissementComponent } from './etablissement-m/ajouter-etablissement/ajouter-etablissement.component';
import { DetailsEtablissementComponent } from './etablissement-m/details-etablissement/details-etablissement.component';
import { ListeFormationComponent } from './formation-m/liste-formation/liste-formation.component';
import { DetailsFormationComponent } from './formation-m/details-formation/details-formation.component';
import { AjouterFormationComponent } from './formation-m/ajouter-formation/ajouter-formation.component';
import { StatusService } from './status.service';
import { AvisService } from './avis.service';


@NgModule({
  declarations: [
    AppComponent,
    AncienEtudiantComponent,
    AvisMasterComponent,

    ListeEtablissementComponent,
    DetailsEtablissementComponent,
    AjouterEtablissementComponent,
    
    ListeFormationComponent,
    DetailsFormationComponent,
    AjouterFormationComponent,
    
    FormulairesComponent,
    UnivMapComponent,
    MasterListeComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    EtablissementService,
    FormationService,
    StatusService,
    AvisService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

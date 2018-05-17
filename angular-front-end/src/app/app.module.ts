import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AncienEtudiantComponent } from './ancien-etudiant/ancien-etudiant.component';
import { AvisMasterComponent } from './avis-master/avis-master.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { FormationComponent } from './formation/formation.component';
import { FormationService } from './formation.service';

import { AppRoutingModule } from './/app-routing.module';
import { FormulairesComponent } from './formulaires/formulaires.component';
import { UnivMapComponent } from './univ-map/univ-map.component';
import { MasterListeComponent } from './master-liste/master-liste.component';
import { MarqueurComponent } from './marqueur/marqueur.component';
import { EtablissementService } from './etablissement.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccueilComponent } from './accueil/accueil.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    AncienEtudiantComponent,
    AvisMasterComponent,
    EtablissementComponent,
    FormationComponent,
    FormulairesComponent,
    UnivMapComponent,
    MasterListeComponent,
    MarqueurComponent,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

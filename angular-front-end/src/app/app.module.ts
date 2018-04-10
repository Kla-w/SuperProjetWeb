import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulairesComponent } from './formulaires/formulaires.component';
import { UnivMapComponent } from './univ-map/univ-map.component';
import { MasterListeComponent } from './master-liste/master-liste.component';
import { MarqueurComponent } from './marqueur/marqueur.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormulairesComponent,
    UnivMapComponent,
    MasterListeComponent,
    MarqueurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

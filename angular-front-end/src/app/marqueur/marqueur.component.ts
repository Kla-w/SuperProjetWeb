import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from '../univ-map/etablissement';
import { Etabs } from '../univ-map/mock-etabs';
import { EtablissementComponent } from '../etablissement/etablissement.component';
import { EtablissementService } from '../etablissement.service';

@Component({
  selector: 'app-marqueur',
  templateUrl: './marqueur.component.html',
  styleUrls: ['./marqueur.component.css']
})
export class MarqueurComponent implements OnInit {

  Etabs: Etablissement[] = [];
  
  @Input() mrk : Etablissement;

  constructor(private etabService: EtablissementService) { }

  // selectedMark: Etablissement;

  selectedMark = {
    "id_etablissement": 1,
    "nom_etab": "Université Paul Sabatier - Toulouse 3",
    "sigle_etab": "UPS",
    "code_postal_etab": "31000",
    "ville_etab": "Toulouse",
    "nom_region": "Occitanie",
    "pays_etab": "France"
  };

  ngOnInit() {
    this.getEtabs();
  }

  onSelect(mark : Etablissement): void {
    this.selectedMark = mark;
    // alert("thh");
    console.log(this.selectedMark);
    $('.nomEtab').text(this.selectedMark.nom_etab);
    if(this.selectedMark.sigle_etab==""){
      $('.sigleEtab').text("");
    }else{
      $('.sigleEtab').text("("+this.selectedMark.sigle_etab+")");
    }
    $('.villeEtab').text(this.selectedMark.ville_etab);
    $('.regionEtab').text(this.selectedMark.nom_region);
  }

  getEtabs(): void {
    this.etabService.getEtabs().subscribe(
      res => this.Etabs = res
    );
  }

}

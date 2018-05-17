import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from '../univ-map/etablissement';
import { Etabs } from '../univ-map/mock-etabs';
import { EtablissementComponent } from '../etablissement/etablissement.component';
import { FormationComponent } from '../formation/formation.component';
import { EtablissementService } from '../etablissement.service';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-marqueur',
  templateUrl: './marqueur.component.html',
  styleUrls: ['./marqueur.component.css']
})
export class MarqueurComponent implements OnInit {
  
  @Input() mrk : Etablissement;

  constructor(private formationService: FormationService) { }

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
    this.getMastersByEtab("Université Paul Sabatier - Toulouse 3");
  }

  getMastersByEtab(nomEtab:string): void{
    this.formationService.getFormations().subscribe(
      res => {
        var htmlLstMaster = "<li>";
        for(let master of res){
          if(master["nom_etab"]==nomEtab){
            htmlLstMaster += "<ul>" + master["intitule_form"] + "</ul>";
          }
        }
        htmlLstMaster += "</li>";
        $('#listeMaster').html(htmlLstMaster);
      });
  }

  onSelect(mark : Etablissement): void {
    this.selectedMark = mark;
    // this.getMastersByEtab(this.selectedMark.nom_etab);
    // var htmlLstMaster = "<li>";
    // for(let mast of this.lstMasters){
    //   htmlLstMaster += "<ul>" + mast["intitule_form"] + "</ul>";
    // }
    // htmlLstMaster += "</li>";
    // console.log(htmlLstMaster);
    $('.nomEtab').text(this.selectedMark.nom_etab);
    if(this.selectedMark.sigle_etab==""){
      $('.sigleEtab').text("");
    }else{
      $('.sigleEtab').text("("+this.selectedMark.sigle_etab+")");
    }
    $('.villeEtab').text(this.selectedMark.ville_etab);
    $('.regionEtab').text(this.selectedMark.nom_region);
  }
}

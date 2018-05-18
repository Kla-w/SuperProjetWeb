import { Component, OnInit, ViewChild } from '@angular/core';

import { } from '@types/googlemaps';
import { Chart, ChartData } from 'chart.js';

import { Etablissement } from './etablissement';
import { EtablissementService } from '../etablissement.service';
import { FormationService } from '../formation.service';
import { NbEtudByFormService } from '../nb-etud-by-form.service';

// POUR POUVOIR UTILISER LE SYMBOLE $ DE JQUERY 
declare var $ :any;


@Component({
  selector: 'app-univ-map',
  templateUrl: './univ-map.component.html',
  styleUrls: ['./univ-map.component.css']
})
export class UnivMapComponent implements OnInit {
  title = 'app';
  @ViewChild('gmap') gmapElement: any;
  mapG: google.maps.Map;
  coord: any;
  marker: any;
  centre: any;
  Etabs: Etablissement[] = [];
  geocoder: any;
  myChart: Chart;
  selectedMark = {
    "id_etablissement": 2,
    "nom_etab": "Institut National Universitaire de Champollion",
    "sigle_etab": "INUC",
    "code_postal_etab": "81000",
    "ville_etab": "Albi",
    "nom_region": "Occitanie",
    "pays_etab": "France"
  };
  constructor(private etabService: EtablissementService, 
              private formationService: FormationService,
              private nbEtudByFormService: NbEtudByFormService
            ) { }

  ngOnInit() {
      // console.log(this.Etabs);

      //Geocoder
      this.geocoder = new google.maps.Geocoder();
  
      //Centre de la carte
      this.centre = {lat: 46.7919721381565, lng: 1.6393986406250178};
  
      //Initialisation de la carte
      var mapProp = {
        center: this.centre,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
      this.mapG = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      
      this.getEtabs();
      // console.log(this.Etabs);
      //Creation des marqueurs  
        // console.log(this.Etabs);
      this.getMastersByEtab(this.selectedMark.id_etablissement);
        
  }

  getMastersByEtab (idEtab:number){
    this.formationService.getFormationsByEtab(idEtab).subscribe(
      ret => {
        let res = ret["data"];
        this.nbEtudByFormService.getNbEtudByForm().subscribe(
          ret2 => {
            let res2 = ret2["data"];
            let labelsTab = new Array();
            let dataTab = new Array();
            for(let master of res){
              let id = master["id_formation"];
              labelsTab.push(master['intitule_form']);
              for(let nb of res2){
                if(nb["id_formation"]==id){
                  dataTab.push(nb["COUNT(nom_etud)"]);
                }
              }
            }
            let dataGraphBar: ChartData;
            let ctx = $('#graphe');
            this.myChart = new Chart('canvas', {
              type: 'bar',
              data: {
                  labels: labelsTab,
                  datasets: [{
                      label: "Nombre d'étudiants dans la formation",
                      data: dataTab,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                  }],
                  
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }
          });
          }
        );
        var htmlLstMaster = "<li>";
        for(let master of res){
            htmlLstMaster += "<ul><a href='/formation/" + master["id_formation"] + "' class='list-group-item list-group-item-action'>" + master["intitule_form"] + "</a></ul>";
        }
        htmlLstMaster += "</li>";
        $('#listeMaster').html(htmlLstMaster);
      });
  }

  getEtabs(): void {
    this.etabService.getEtablissements().subscribe(
      ret =>{
        let res = ret["data"];
        for(let etab of res){
          var address = etab.nom_etab+" "+etab.ville_etab+" "+etab.code_postal_etab+" "+etab.pays_etab;
          // console.log(address);
          this.geocoder.geocode( { 'address': address}, (results, status) => {
            if (status == 'OK') {
              this.marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: this.mapG,
                title: etab.nom_etab
              }); 
              google.maps.event.addListener(this.marker, 'click', () => {this.onSelect(etab)});
              // console.log(this.marker);
            } 
            // else {
            //   console.log(etab[1]+" "+status);
            // }
          });
    
        }
      }
    );
  }
  onSelect(mark : Etablissement): void {
    this.selectedMark = mark;
    this.getMastersByEtab(this.selectedMark.id_etablissement);
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

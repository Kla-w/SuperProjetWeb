import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { MarqueurComponent } from '../marqueur/marqueur.component';
import { Etablissement } from './etablissement';
import { EtablissementService } from '../etablissement.service';
import { EtablissementComponent } from '../etablissement/etablissement.component';

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
  Etabs: EtablissementComponent[] = [];
  constructor(private etabService: EtablissementService) { }

  ngOnInit() {
    
      this.getEtabs();
      setTimeout(
        function()
          {console.log(this.Etabs);}
        ,1000);

      //Geocoder
      var geocoder;
      geocoder = new google.maps.Geocoder();
  
      //Centre de la carte
      this.centre = {lat: 46.7919721381565, lng: 1.6393986406250178};
  
      //Initialisation de la carte
      var mapProp = {
        center: this.centre,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
      this.mapG = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      
      //Creation des marqueurs
      setTimeout(
      function(){  
        console.log(this.Etabs);
        for(let etab of this.Etabs){
          var address = etab[1]+" "+etab[4]+" "+etab[3]+" "+etab[6];
          console.log(address);
          geocoder.geocode( { 'address': address}, (results, status) => {
            if (status == 'OK') {
              this.marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: this.mapG,
                title: etab[1]
              }); 
              google.maps.event.addListener(this.marker, 'click', function() {MarqueurComponent.prototype.onSelect(etab)});
              console.log(this.marker);
            } else {
              console.log(etab[1]+" "+status);
            }
          });
    
        }
      },2000);
  }

  getEtabs(): void {
    this.etabService.getEtablissements().subscribe(
      res => this.Etabs = res
    );
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { MarqueurComponent } from '../marqueur/marqueur.component';
import { Marqueur } from './mark';
import { MARKS, CentrMrk } from './mock-mark';

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
  constructor() { }

  ngOnInit() {
      //Geocoder
      var geocoder;
      geocoder = new google.maps.Geocoder();
  
      //Centre de la carte
      this.centre = {lat: CentrMrk.lat, lng: CentrMrk.lng};
  
      //Initialisation de la carte
      var mapProp = {
        center: this.centre,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
      this.mapG = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
      //Creation des marqueurs
      for(let mrk of MARKS){
        var address = mrk.name+" "+mrk.ville+" "+mrk.cp+" "+mrk.pays;
        console.log(address);
        geocoder.geocode( { 'address': address}, (results, status) => {
          if (status == 'OK') {
            this.marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: this.mapG,
              title: mrk.name
            }); 
            google.maps.event.addListener(this.marker, 'click', function() {MarqueurComponent.prototype.onSelect(mrk)});
            console.log(this.marker);
          } else {
            console.log(mrk.name+" "+status);
          }
        });
  
      }
  }

}

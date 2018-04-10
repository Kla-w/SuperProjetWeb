import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../univ-map/etablissement';
import { Etabs } from '../univ-map/mock-etabs';

@Component({
  selector: 'app-marqueur',
  templateUrl: './marqueur.component.html',
  styleUrls: ['./marqueur.component.css']
})
export class MarqueurComponent implements OnInit {

  constructor() { }

  selectedMark: Etablissement;

  ngOnInit() {
  }

  onSelect(mrk : Etablissement): void {
    this.selectedMark = mrk;
    // alert("thh");
    console.log(this.selectedMark);
  }

}

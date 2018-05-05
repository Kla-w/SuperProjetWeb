import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from '../univ-map/etablissement';
import { Etabs } from '../univ-map/mock-etabs';
import { EtablissementComponent } from '../etablissement/etablissement.component';

@Component({
  selector: 'app-marqueur',
  templateUrl: './marqueur.component.html',
  styleUrls: ['./marqueur.component.css']
})
export class MarqueurComponent implements OnInit {

  @Input() mrk : EtablissementComponent;

  constructor() { }

  selectedMark: EtablissementComponent;

  ngOnInit() {
  }

  onSelect(mrk : EtablissementComponent): void {
    this.selectedMark = mrk;
    // alert("thh");
    console.log(this.selectedMark);
  }

}

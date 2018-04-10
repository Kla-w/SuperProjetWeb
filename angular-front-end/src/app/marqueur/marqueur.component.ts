import { Component, OnInit } from '@angular/core';
import { Marqueur } from '../univ-map/mark';
import { MARKS } from '../univ-map/mock-mark';

@Component({
  selector: 'app-marqueur',
  templateUrl: './marqueur.component.html',
  styleUrls: ['./marqueur.component.css']
})
export class MarqueurComponent implements OnInit {

  constructor() { }

  selectedMark: Marqueur;

  ngOnInit() {
  }

  onSelect(mrk : Marqueur): void {
    this.selectedMark = mrk;
    // alert("thh");
  }

}

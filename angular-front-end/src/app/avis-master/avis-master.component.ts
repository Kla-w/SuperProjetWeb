import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-avis-master',
  templateUrl: './avis-master.component.html',
  styleUrls: ['./avis-master.component.css']
})
export class AvisMasterComponent implements OnInit {

  noWrapSlides = false;

  constructor() { }

  ngOnInit() {
  }

}

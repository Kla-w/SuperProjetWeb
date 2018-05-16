import { Component, OnInit, Input } from '@angular/core';

export class AncienEtudiant {
    nom : string;
    prenom : string;
    mail : string;
}

@Component({
  selector: 'app-ancien-etudiant',
  templateUrl: './ancien-etudiant.component.html',
  styleUrls: ['./ancien-etudiant.component.css']
})
export class AncienEtudiantComponent implements OnInit {

  
  etudiant : AncienEtudiant;

  constructor() {

   }

  ngOnInit() {
  }

}

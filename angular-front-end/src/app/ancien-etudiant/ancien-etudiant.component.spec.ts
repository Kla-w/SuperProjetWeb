import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienEtudiantComponent } from './ancien-etudiant.component';

describe('AncienEtudiantComponent', () => {
  let component: AncienEtudiantComponent;
  let fixture: ComponentFixture<AncienEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncienEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncienEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

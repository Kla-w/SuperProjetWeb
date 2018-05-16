import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListeComponent } from './master-liste.component';

describe('MasterListeComponent', () => {
  let component: MasterListeComponent;
  let fixture: ComponentFixture<MasterListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

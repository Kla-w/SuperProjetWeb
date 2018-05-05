import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisMasterComponent } from './avis-master.component';

describe('AvisMasterComponent', () => {
  let component: AvisMasterComponent;
  let fixture: ComponentFixture<AvisMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueurComponent } from './marqueur.component';

describe('MarqueurComponent', () => {
  let component: MarqueurComponent;
  let fixture: ComponentFixture<MarqueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivMapComponent } from './univ-map.component';

describe('UnivMapComponent', () => {
  let component: UnivMapComponent;
  let fixture: ComponentFixture<UnivMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

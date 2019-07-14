import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkSpotComponent } from './park-spot.component';

describe('ParkSpotComponent', () => {
  let component: ParkSpotComponent;
  let fixture: ComponentFixture<ParkSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

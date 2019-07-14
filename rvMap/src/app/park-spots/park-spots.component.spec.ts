import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkSpotsComponent } from './park-spots.component';

describe('ParkSpotsComponent', () => {
  let component: ParkSpotsComponent;
  let fixture: ComponentFixture<ParkSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

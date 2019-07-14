import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkAmenitiesComponent } from './park-amenities.component';

describe('ParkAmenitiesComponent', () => {
  let component: ParkAmenitiesComponent;
  let fixture: ComponentFixture<ParkAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

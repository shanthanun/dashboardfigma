import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvesselComponent } from './myvessel.component';

describe('MyvesselComponent', () => {
  let component: MyvesselComponent;
  let fixture: ComponentFixture<MyvesselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyvesselComponent]
    });
    fixture = TestBed.createComponent(MyvesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

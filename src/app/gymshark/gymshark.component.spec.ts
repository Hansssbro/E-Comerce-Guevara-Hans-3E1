import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsharkComponent } from './gymshark.component';

describe('GymsharkComponent', () => {
  let component: GymsharkComponent;
  let fixture: ComponentFixture<GymsharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymsharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymsharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YounglaComponent } from './youngla.component';

describe('YounglaComponent', () => {
  let component: YounglaComponent;
  let fixture: ComponentFixture<YounglaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YounglaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YounglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

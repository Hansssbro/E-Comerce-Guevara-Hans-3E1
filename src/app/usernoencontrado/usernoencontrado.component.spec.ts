import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoencontradoComponent } from './usernoencontrado.component';

describe('UsernoencontradoComponent', () => {
  let component: UsernoencontradoComponent;
  let fixture: ComponentFixture<UsernoencontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernoencontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

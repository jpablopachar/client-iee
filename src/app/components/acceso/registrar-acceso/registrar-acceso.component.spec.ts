import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAccesoComponent } from './registrar-acceso.component';

describe('RegistrarAccesoComponent', () => {
  let component: RegistrarAccesoComponent;
  let fixture: ComponentFixture<RegistrarAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

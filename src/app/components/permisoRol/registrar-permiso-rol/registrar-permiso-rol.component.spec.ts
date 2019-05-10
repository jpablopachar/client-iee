import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPermisoRolComponent } from './registrar-permiso-rol.component';

describe('RegistrarPermisoRolComponent', () => {
  let component: RegistrarPermisoRolComponent;
  let fixture: ComponentFixture<RegistrarPermisoRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPermisoRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPermisoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PermisoRolService } from './permiso-rol.service';

describe('PermisoRolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermisoRolService = TestBed.get(PermisoRolService);
    expect(service).toBeTruthy();
  });
});

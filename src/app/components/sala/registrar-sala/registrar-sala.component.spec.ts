import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSalaComponent } from './registrar-sala.component';

describe('RegistrarSalaComponent', () => {
  let component: RegistrarSalaComponent;
  let fixture: ComponentFixture<RegistrarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

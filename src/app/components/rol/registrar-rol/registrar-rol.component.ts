import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {RolService} from '../../../services/rol.service';
import {Rol} from '../../../models/rol';
import {UsuarioService} from '../../../services/usuario.service';

@Component({
  selector: 'app-registrar-rol',
  templateUrl: './registrar-rol.component.html',
  styleUrls: ['./registrar-rol.component.css'],
  providers: [RolService]
})
export class RegistrarRolComponent implements OnInit {
  public titulo: string;
  public rol: Rol;
  public estado: string;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _usuarioService: UsuarioService,
    private _rolService: RolService) {
    this.titulo = 'Registrar Rol';
    this.token = this._usuarioService.obtenerToken();
    this.rol = new Rol('', '', true);
  }

  ngOnInit() {
    console.log('¡Componente registrar-rol cargado!');
  }

  onSubmit(form: NgForm) {
    this._rolService.guardarRol(this.token, this.rol).subscribe((res) => {
      if (!res.roles) {
        this.estado = 'error';
      } else {
        this.estado = 'exito';

        form.reset();
      }
    }, error => console.log(<any>error));
  }
}

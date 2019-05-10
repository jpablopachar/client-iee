import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Rol} from '../../../models/rol';
import {RolService} from '../../../services/rol.service';
import {UsuarioService} from '../../../services/usuario.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {
  public titulo: string;
  public roles: Rol[];
  public identidad;
  public token;

  constructor(private _route: ActivatedRoute, _router: Router, private _usuarioService: UsuarioService, private _rolService: RolService) {
    this.titulo = 'Listado de roles';
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente listar-roles cargado!');
    this.identidad = this._usuarioService.obtenerIdentidad();
    this.listarRoles();
  }

  listarRoles() {
    this._rolService.listarRoles(this.token).subscribe((res) => {
      console.log(res.roles);
      this.roles = res.roles;
    }, error => console.log(<any>error));
  }

  eliminarRol(idRol: string) {
    this._rolService.eliminarRol(this.token, idRol).subscribe(res => this.listarRoles(), error => console.log(<any>error));
  }
}

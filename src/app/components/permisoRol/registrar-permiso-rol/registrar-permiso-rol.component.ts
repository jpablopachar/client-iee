import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {PermisoRolService} from "../../../services/permiso-rol.service";
import {PermisoRol} from "../../../models/permisoRol";
import {RolService} from "../../../services/rol.service";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-registrar-permiso-rol',
  templateUrl: './registrar-permiso-rol.component.html',
  styleUrls: ['./registrar-permiso-rol.component.css'],
  providers: [PermisoRolService]
})
export class RegistrarPermisoRolComponent implements OnInit {
  public titulo: string;
  public permisoRol: PermisoRol;
  public permisoRoles: PermisoRol[];
  public estado: string;
  public roles;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _permisoRolService: PermisoRolService,
    private _rolService: RolService, private _usuarioService: UsuarioService) {
    this.titulo = 'Registrar Permisos';
    this.token = this._usuarioService.obtenerToken();
    this.permisoRol = new PermisoRol('', '', '', '', '', true);
  }

  ngOnInit() {
    console.log('¡Componente registrar-permiso-rol cargado!');
    this.listarPermisosRoles();
    this.obtenerRoles();
  }

  onSubmit(form: NgForm) {
    this._permisoRolService.guardarPermisoRol(this.token, this.permisoRol).subscribe((res) => {
      console.log(res.permisoDB);
      if (res.permisoDB && res.permisoDB._id) {
        this.estado = 'exito';

        form.reset();
        this.listarPermisosRoles();
      } else {
        this.estado = 'exito';
        this.listarPermisosRoles();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  listarPermisosRoles() {
    this._permisoRolService.listarPermisosRoles(this.token).subscribe((res) => {
      this.permisoRoles = res.permisos;
    }, error => console.log(<any>error));
  }

  obtenerRoles() {
    console.log('-');
    this._rolService.listarRoles(this.token).subscribe(res => this.roles = res.roles, error => console.log(<any>error));
  }

  eliminarPermisoRol(idPermisoRol) {
    this._permisoRolService.eliminarPermisoRol(this.token, idPermisoRol).subscribe(res => this.listarPermisosRoles(), error => console.log(<any>error));
  }
}

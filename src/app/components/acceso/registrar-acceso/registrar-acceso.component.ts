import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {AccesoService} from "../../../services/acceso.service";
import {UsuarioService} from "../../../services/usuario.service";
import {Acceso} from "../../../models/acceso";
import {SalaService} from "../../../services/sala.service";

@Component({
  selector: 'app-registrar-acceso',
  templateUrl: './registrar-acceso.component.html',
  styleUrls: ['./registrar-acceso.component.css'],
  providers: [AccesoService, UsuarioService, SalaService]
})
export class RegistrarAccesoComponent implements OnInit {
  public titulo: string;
  public acceso: Acceso;
  public permisos: Acceso[];
  public usuarios;
  public salas;
  public token;
  public estado: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _accesoService: AccesoService,
    private _usuarioService: UsuarioService, private _salaService: SalaService) {
    this.titulo = 'Registrar Acceso';
    this.token = _usuarioService.obtenerToken();
    this.acceso = new Acceso('', '', '', '', '', 'ENTRADA', true);
  }

  ngOnInit() {
    console.log('¡Componente registrar-acceso cargado!');
    this.obtenerUsuarios();
    this.obtenerSalas();
    this.listarAccesos();
  }

  onSubmit(form: NgForm) {
    this._accesoService.guardarAcceso(this.token, this.acceso).subscribe((res) => {
      if (res.permisoDB) {
        this.estado = 'error';
      } else {
        this.estado = 'exito';

        this.listarAccesos();
        form.reset();
      }
    }, error => console.log(error));
  }

  obtenerUsuarios() {
    this._usuarioService.listarUsuarios(this.token).subscribe(res => this.usuarios = res.usuarios, error => console.log(<any>error));
  }

  obtenerSalas() {
    this._salaService.obtenerSalas(this.token).subscribe((res) => {
      console.log(res);
      this.salas = res.salas;
    }, error => console.log(<any>error));
  }

  listarAccesos() {
    this._accesoService.listarAccesos(this.token).subscribe((res) => {
      console.log(res);
      this.permisos = res.permisos;
    }, (error) => {
      console.log(<any>error);
    });
  }

  eliminarAcceso(idAcceso: string) {
    this._accesoService.eliminarAcceso(this.token, idAcceso).subscribe(res => this.listarAccesos(), error => console.log(<any>error));
  }
}

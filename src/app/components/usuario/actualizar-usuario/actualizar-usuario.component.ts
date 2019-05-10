import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import {UsuarioService} from "../../../services/usuario.service";
import {Usuario} from "../../../models/usuario";

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
  providers: [UsuarioService]
})
export class ActualizarUsuarioComponent implements OnInit {
  public titulo: string;
  public usuario: Usuario;
  public identidad;
  public token;
  public url: string;
  public estado: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _usuarioService: UsuarioService) {
    this.titulo = 'Actualizar mis datos';
    this.usuario = this._usuarioService.obtenerIdentidad();
    this.identidad = this.usuario;
    this.token = this._usuarioService.obtenerToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log(this.usuario);
    console.log('¡Componente actualizar-usuario cargado!');
  }

  /*onSubmit() {
    this._usuarioService.actualizarUsuario(this.usuario).subscribe((res) => {
      if (!res.usuario) {
        this.estado = 'error';
      } else {
        this.estado = 'exito';


      }
    }, (error) => {
      const mensajeError = <any>error;
      console.log(mensajeError);

      if (mensajeError !== null) {
        this.estado = 'error';
      }
    });
  }*/
}

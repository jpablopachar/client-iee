import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [UsuarioService]
})
export class ListarComponent implements OnInit {
  public titulo: string;
  public usuarios: Usuario[];
  public token;

  constructor(private _route: ActivatedRoute, _router: Router, private _usuarioService: UsuarioService) {
    this.titulo = 'Listado de usuarios';
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente listar-usuarios cargado!');
    this.listarUsuarios();
  }

  listarUsuarios() {
    this._usuarioService.listarUsuarios(this.token).subscribe((res) => {
      console.log(res);
      this.usuarios = res.usuarios;
    }, error => console.log(<any>error));
  }

  eliminarUsuario(idUsuario: string) {
    this._usuarioService.eliminarUsuario(this.token, idUsuario).subscribe(res => this.listarUsuarios(), error => console.log(<any>error));
  }
}

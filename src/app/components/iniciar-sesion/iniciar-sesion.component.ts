import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
  providers: [UsuarioService]
})
export class IniciarSesionComponent implements OnInit {
  public titulo: string;
  public usuario: Usuario;
  public estado: string;
  public identidad;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _usuarioService: UsuarioService) {
    this.titulo = 'Iniciar Sesión';
    this.usuario = new Usuario('', '', '', '', '', '', '', '', '', true);
  }

  ngOnInit() {
    console.log('¡Componente iniciar-sesion cargado!');
  }

  onSubmit(form: NgForm) {
    this._usuarioService.iniciarSesion(this.usuario).subscribe((res) => {
      this.identidad = res.usuario;

      console.log(this.identidad);

      if (!this.identidad || !this.identidad._id) {
        this.estado = 'error';
      } else {
        // Persistir datos del usuario
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        // Obtener el token
        this.obtenerToken();
      }

      this._router.navigate(['/']);
    }, (error) => {
      const mensajeError = <any>error;

      console.log(mensajeError);

      if (mensajeError != null) {
        this.estado = 'error';
      }
    });
  }

  obtenerToken() {
    this._usuarioService.iniciarSesion(this.usuario, 'true').subscribe((res) => {
      this.token = res.token;

      if (this.token.lenght <= 0) {
        this.estado = 'error';
      } else {
        localStorage.setItem('token', this.token);
        this.obtenerToken();
      }
    }, (error) => {
      const mensajeError = <any>error;

      console.log(mensajeError);

      if (mensajeError != null) {
        this.estado = 'error';
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [UsuarioService, RolService]
})
export class RegistrarComponent implements OnInit {
  public titulo: string;
  public usuarios: Usuario[];
  public usuario: Usuario;
  public estado: string;
  public roles;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _usuarioService: UsuarioService,
    private _rolService: RolService) {
    this.titulo = 'Registrar Usuario';
    this.token = _usuarioService.obtenerToken();
    this.usuario = new Usuario('', '', '', '', '', '', '', '', '', true);
  }

  ngOnInit() {
    console.log('¡Componente registrar-usuario cargado!');
    this.obtenerRoles();
  }

  onSubmit(form: NgForm) {
    this._usuarioService.registrarUsuario(this.token, this.usuario).subscribe((res) => {
      if (res.usuarioDB && res.usuarioDB._id) {
        this.estado = 'exito';

        form.reset();
        // this._router.navigate(['/usuario']);
      } else {
        this.estado = 'exito';
      }
    }, error => console.log(<any>error));
  }

  obtenerRoles() {
    console.log('-');
    this._rolService.listarRoles(this.token).subscribe(res => this.roles = res.roles, error => console.log(<any>error));
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SalaService } from 'src/app/services/sala.service';
import { Sala } from 'src/app/models/sala';
import {UsuarioService} from '../../../services/usuario.service';

@Component({
  selector: 'app-registrar-sala',
  templateUrl: './registrar-sala.component.html',
  styleUrls: ['./registrar-sala.component.css'],
  providers: [SalaService]
})
export class RegistrarSalaComponent implements OnInit {
  public titulo: string;
  public sala: Sala;
  public salas: Sala[];
  public estado: string;
  public roles;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _usuarioService: UsuarioService, private _salaService: SalaService) {
    this.titulo = 'Registrar Sala';
    this.token = this._usuarioService.obtenerToken();
    this.sala = new Sala('', '', '', true);
  }

  ngOnInit() {
    console.log('¡Componente registrar-sala cargado!');
    this.listarSalas();
  }

  onSubmit(form: NgForm) {
      this._salaService.registrarSala(this.token, this.sala).subscribe((res) => {
        if (res.salaDB) {
          this.estado = 'error';
        } else {
          this.estado = 'exito';

          this.listarSalas();
          form.reset();
        }
      }, (error) => console.log(<any>error));
      /* this._salaService.editarSala(this.token, this.sala).subscribe((res) => {
        if (res.salaDB) {
          this.estado = 'error';
        } else {
          this.estado = 'exito';

          this.listarSalas();
          form.reset();
        }
      }, (error) => console.log(<any>error)); */
    /*} else {
      this._salaService.editarSala(this.token, this.sala).subscribe((res) => {
        if (res.salaDB) {
          this.estado = 'error';
        } else {
          this.estado = 'exito';

          this.listarSalas();
          form.reset();
        }
      }, (error) => console.log(<any>error));
      /*this._salaService.registrarSala(this.token, this.sala).subscribe((res) => {
        if (res.salaDB) {
          this.estado = 'error';
        } else {
          this.estado = 'exito';

          this.listarSalas();
          form.reset();
        }
      }, (error) => console.log(<any>error));
    }*/
  }

  listarSalas() {
    this._salaService.obtenerSalas(this.token).subscribe((res) => {
      this.salas = res.salas;
    }, error => console.log(<any>error));
  }

  eliminarSala(idSala: string) {
    this._salaService.eliminarSala(this.token, idSala).subscribe(res => this.listarSalas(), error => console.log(<any>error));
  }

  editarSala(sala: Sala) {
    this.sala = sala;
  }
}

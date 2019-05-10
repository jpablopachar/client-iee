import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;
  public identidad;
  public token;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registrarUsuario(token, usuario: Usuario): Observable<any> {
    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.post(this.url + 'usuario', params, {headers: headers});
  }

  iniciarSesion(usuario, token = null): Observable<any> {
    if (token != null) {
      usuario.token = token;
    }

    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'login', params, {headers: headers});
  }

  obtenerIdentidad() {
    const identidad = JSON.parse(localStorage.getItem('identidad'));

    if (identidad !== 'undefined') {
      this.identidad = identidad;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

  obtenerToken() {
    const token = localStorage.getItem('token');

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  listarUsuarios(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.get(this.url + 'usuario', {headers: headers});
  }

  /*actualizarUsuario(usuario: Usuario): Observable<any> {
    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', this.obtenerToken());

    return this._http.put(this.url + 'usuario/' + usuario._id, params, {headers: headers});
  }*/

  eliminarUsuario(token, idUsuario): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', this.obtenerToken());

    return this._http.delete(this.url + 'usuario/' + idUsuario, {headers: headers});
  }
}

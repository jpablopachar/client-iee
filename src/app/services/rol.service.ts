import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';
import { Rol } from '../models/rol';
import {UsuarioService} from "./usuario.service";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  public url: string;
  public token;

  constructor(public _http: HttpClient, _usuarioService: UsuarioService) {
    this.url = GLOBAL.url;
    this.token = _usuarioService.obtenerToken();
  }

  guardarRol(token, rol: Rol): Observable<any> {
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.post(this.url + 'rol', params, {headers: headers});
  }

  listarRoles(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.get(this.url + 'rol', {headers: headers});
  }

  eliminarRol(token, idRol): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.delete(this.url + 'rol/' + idRol, {headers: headers});
  }
}

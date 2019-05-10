import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioService} from "./usuario.service";
import {GLOBAL} from "./global";
import {PermisoRol} from "../models/permisoRol";

@Injectable({
  providedIn: 'root'
})
export class PermisoRolService {
  public url: string;
  public token;

  constructor(public _http: HttpClient, _usuarioService: UsuarioService) {
    this.url = GLOBAL.url;
    this.token = _usuarioService.obtenerToken();
  }

  guardarPermisoRol(token, permisoRol: PermisoRol): Observable<any> {
    const params = JSON.stringify(permisoRol);
    console.log('-');
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.post(this.url + 'permiso', params, {headers: headers});
  }

  listarPermisosRoles(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.get(this.url + 'permiso', {headers: headers});
  }

  eliminarPermisoRol(token, idPermisoRol): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.delete(this.url + 'permiso/' + idPermisoRol, {headers: headers});
  }
}

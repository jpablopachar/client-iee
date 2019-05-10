import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { ListarComponent } from './components/usuario/listar/listar.component';
import { RegistrarSalaComponent } from './components/sala/registrar-sala/registrar-sala.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import {RegistrarRolComponent} from './components/rol/registrar-rol/registrar-rol.component';
import {ListarRolComponent} from './components/rol/listar-rol/listar-rol.component';
import {ListarSalaComponent} from './components/sala/listar-sala/listar-sala.component';
import {ActualizarUsuarioComponent} from "./components/usuario/actualizar-usuario/actualizar-usuario.component";
import {RegistrarAccesoComponent} from "./components/acceso/registrar-acceso/registrar-acceso.component";
import {RegistrarPermisoRolComponent} from "./components/permisoRol/registrar-permiso-rol/registrar-permiso-rol.component";

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: IniciarSesionComponent},
  {path: 'registrarse', component: RegistrarComponent},
  {path: 'usuario', component: ListarComponent},
  {path: 'actualizarUsuario', component: ActualizarUsuarioComponent},
  {path: 'sala', component: RegistrarSalaComponent},
  {path: 'editarSala', component: ListarSalaComponent},
  {path: 'rol', component: RegistrarRolComponent},
  {path: 'roles', component: ListarRolComponent},
  {path: 'acceso', component: RegistrarAccesoComponent},
  {path: 'permisoRol', component: RegistrarPermisoRolComponent},
  {path: '**', component: InicioComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

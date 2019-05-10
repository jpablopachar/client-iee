import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { ListarComponent } from './components/usuario/listar/listar.component';
import { ListarSalaComponent } from './components/sala/listar-sala/listar-sala.component';
import { RegistrarSalaComponent } from './components/sala/registrar-sala/registrar-sala.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ListarRolComponent } from './components/rol/listar-rol/listar-rol.component';
import { RegistrarRolComponent } from './components/rol/registrar-rol/registrar-rol.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';
import { RegistrarAccesoComponent } from './components/acceso/registrar-acceso/registrar-acceso.component';
import { RegistrarPermisoRolComponent } from './components/permisoRol/registrar-permiso-rol/registrar-permiso-rol.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ListarComponent,
    ListarSalaComponent,
    RegistrarSalaComponent,
    InicioComponent,
    IniciarSesionComponent,
    ListarRolComponent,
    RegistrarRolComponent,
    ActualizarUsuarioComponent,
    RegistrarAccesoComponent,
    RegistrarPermisoRolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

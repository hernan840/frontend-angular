import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/modals/menu/login/login.component';
import { EditInfoPerfilMComponent } from './componentes/modals/menu/edit-info-perfil-m/edit-info-perfil-m.component';
import { InfoPortadaComponent } from './componentes/modals/portada/info-portada/info-portada.component';
import { NuevaRedSocialComponent } from './componentes/modals/portada/nueva-red-social/nueva-red-social.component';
import { EditarRedSocialComponent } from './componentes/modals/portada/editar-red-social/editar-red-social.component';
import { EditarSobremiComponent } from './componentes/modals/sobremi/editar-sobremi/editar-sobremi.component';
import { NuevaExperienciaComponent } from './componentes/modals/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/modals/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './componentes/modals/educacion/nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/modals/educacion/editar-educacion/editar-educacion.component';
import { NuevaHabilidadComponent } from './componentes/modals/habilidad/nueva-habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './componentes/modals/habilidad/editar-habilidad/editar-habilidad.component';
import { NuevoProyectoComponent } from './componentes/modals/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/modals/proyecto/editar-proyecto/editar-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortadaComponent,
    SobreMiComponent,
    ExperienciasComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    EditInfoPerfilMComponent,
    InfoPortadaComponent,
    NuevaRedSocialComponent,
    EditarRedSocialComponent,
    EditarSobremiComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevaHabilidadComponent,
    EditarHabilidadComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

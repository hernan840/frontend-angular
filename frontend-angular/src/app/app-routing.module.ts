import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { Pag404Component } from './componentes/pag404/pag404.component';
import { EditarProyectoComponent } from './componentes/modals/proyecto/editar-proyecto/editar-proyecto.component';
import { EditarEducacionComponent } from './componentes/modals/educacion/editar-educacion/editar-educacion.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  {path: 'editProyecto/:id', component: EditarProyectoComponent},
  {path: 'editEducacion/:id', component: EditarEducacionComponent},
  { path: '**', component: Pag404Component},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

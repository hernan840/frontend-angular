import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortadaComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

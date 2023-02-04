# FrontendAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## instalar dependencia bootstrap con npm install bootstrap y copiar la de fontawesome

## crear componente menu y acomodar su seccion de css

## crear componente portada y acomodar su seccion de css

## crear componente sobre mi y acomodar su seccion de css

## crear componente experiencias y acomodar su seccion de css

## crear componente educacion y acomodar su seccion de css

## crear componente habilidades y acomodar su seccion de css

## crear componente proyectos y acomodar su seccion de css

## crear componente modal login y acomodar su seccion de css

## crear componente modal editar informacion de perfil de menu y acomodar su seccion de css

## crear componente modal editar informacion de portada y acomodar su seccion de css

## crear componente modal nueva red social y acomodar su seccion de css

## crear componente modal editar red social y acomodar su seccion de css

## crear componente modal editar sobre mi y acomodar su seccion de css

## crear componente modal nueva experiencia laboral y acomodar su seccion de css

## crear componente modal editar experiencia laboral y acomodar su seccion de css

## crear componente modal nueva educacion, acomodar su seccion de css. Y ajustar vista de btn de menu editar,entrar y salir

## crear componente modal editar educacion, acomodar su seccion de css.

## crear componente modal nueva habilidad, acomodar su seccion de css.

## crear componente modal editar habilidad, acomodar su seccion de css.

## crear componente modal nuevo proyecto, acomodar su seccion de css.

## crear componente modal editar proyecto, acomodar su seccion de css.

## acomode los btn de portada y sobre mi

## colocar efecto al pasar el cursor sobre el btn 
----------------------------------------------------------------------------
## se coloco el fondo de particulas y crao la pagina de error 404
## se acomodo los selectores de los modales segun corresponda en el componente  al final del archivo componen.html
## se creo el archivo de routin el index necesario donde se coloco los selectores de la pagina, por ultimo edito el archivo app.component.html agregando el selector de routin <router-outlet></router-outlet>. Y el componente de la pagina de error 404
----------------------------------------------------------------------------
## se aplico data-bs-backdrop="static" 
para que el modal solo se cierre cuando se presione canselar o X. dejando sin efecto el que se cierre al hacer click fuera del modal
## se creo el servicio para obtener datos del json
pasos:
1 crear el servicio 
2 inyectamos en el constructor del componente el servicio
3 se importo el  el servicio HttpClientModule en el app.module.ts
4 inyectamos el servicio de http client en el constructor en porfolio.service.ts
5 se crea el json en assets
6 usamos suscribe en el ts del componente, se define una variable miPorfolio del tipo any y en oninit asignamos la variable mi porfolio  con data
7 en el templateUrl html del componete se uso Binding Interpolation para cadenas y Property para las imagenes

se aplico a menu como en portada.

## se aplico el servicio get
 a los compornentes menu, portada y sobre mi. haciendo el uso de Binding Interpolation para cadenas y Property para las imagenes

---------------------------------------------------------------------------
## se agrdo el servicio get a los componentes experiencia y educacion
como ambos poseen una lista de elementos para recorrerlo se usa *ngFor en el div contenedor
<div class="box-container-experiencias" *ngFor="let experiencia of experienciaLista">

## se adrego el servicio al componente de proyectos
--------------------------------------------------------------------------
## se agrego el servicio get al comopente habilidades
se creo la seccion de json para ese servicio
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  personas: any[]=[];
  // inyectamos el servicio en el contructor
  constructor(private personaService : PersonaService) { }

  
  ngOnInit(): void {
    this.cargarProyectos();
   
  }

  cargarProyectos():void{
    this.personaService.lista().subscribe(data =>{
      this.personas = data;
    });
  }

  borrar(id:number){
    if (id != undefined){
      this.personaService.delete(id).subscribe(
        data =>{
          //alert("Halidad eliminada!!!");
          this.cargarProyectos();
        }, err =>{
          //alert("No se pudo eliminar la habilidad!")
          window.location.reload();
        })
    }}


}

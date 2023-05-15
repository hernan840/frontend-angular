import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit{

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  experiencias: any[]=[];

  // inyectamos el servicio en el contructor
  constructor(private experienciaService : ExperienciaService) { }

  
  ngOnInit(): void {
    this.cargarProyectos();
   
  }

  cargarProyectos():void{
    this.experienciaService.lista().subscribe(data =>{
      this.experiencias = data;
    });
  }

  borrar(id:number){
    if (id != undefined){
      this.experienciaService.delete(id).subscribe(
        data =>{
          //alert("Halidad eliminada!!!");
          this.cargarProyectos();
        }, err =>{
          //alert("No se pudo eliminar la habilidad!")
          window.location.reload();
        })
    }}


}

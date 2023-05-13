import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  proyectos: any[]=[];
  constructor(private proyectoService : ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos():void{
    this.proyectoService.lista().subscribe(data =>{
      this.proyectos = data;
    });
  }

  borrar(id:number){
    if (id != undefined){
      this.proyectoService.delete(id).subscribe(
        data =>{
          //alert("Halidad eliminada!!!");
          this.cargarProyectos();
        }, err =>{
          //alert("No se pudo eliminar la habilidad!")
          window.location.reload();
        })
    }}
}

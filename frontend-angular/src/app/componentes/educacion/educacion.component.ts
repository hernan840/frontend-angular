import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  educaciones: any[]=[];

  // inyectamos el servicio en el contructor
  constructor(private educacionService : EducacionService) { }

  
  ngOnInit(): void {
    this.cargarEducaciones();
   
  }

  cargarEducaciones():void{
    this.educacionService.lista().subscribe(data =>{
      this.educaciones = data;
    });
  }

  borrar(id:number){
    if (id != undefined){
      this.educacionService.delete(id).subscribe(
        data =>{
          //alert("Halidad eliminada!!!");
          this.cargarEducaciones();
        }, err =>{
          //alert("No se pudo eliminar la habilidad!")
          window.location.reload();
        })
    }}


}

import { Component, OnInit } from '@angular/core';

import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit{

  experienciaLista: any;

  // inyectamos el servicio en el contructor
  constructor(private datosPorfolio:PorfolioService) { }

  // para acceder al servicio lo hace a traves de ngOnInit
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciaLista= data.experience;
    });

  }

}

import { Component, OnInit } from '@angular/core';

import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit{
  miPorfolio: any;

  // inyectamos el servicio en el contructor
  constructor(private datosPorfolio:PorfolioService) { }

  // para acceder al servicio lo hace a traves de ngOnInit
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio= data;
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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

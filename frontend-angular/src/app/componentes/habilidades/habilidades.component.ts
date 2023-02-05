import { Component, OnInit } from '@angular/core';

import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadLista: any;
  habilidadDuraLista: any;
  habilidadBlandasLista: any;
  habilidadIdiomaLista: any;

  // inyectamos el servicio en el contructor
  constructor(private datosPorfolio:PorfolioService) { }

  // para acceder al servicio lo hace a traves de ngOnInit
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      // console.log(data);


      this.habilidadDuraLista= data.ability.duras;
      this.habilidadBlandasLista= data.ability.blandas;
      this.habilidadIdiomaLista= data.ability.idiomas;
      console.log(data.ability.idiomas);

      console.log("duras" in data.ability); //consulta si existe dentro la lista
      

      
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent  implements OnInit{
 
  /* se crea una variable forms */
  forms: FormGroup;
  proye :Proyecto = new Proyecto('','','','','');

  constructor(private formBuilder: FormBuilder,
              private proyectoService:ProyectoService,
              private activatedRoute:ActivatedRoute,
              private router:Router){

    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms= this.formBuilder.group({
      id:[''],
      nameProyect:['', Validators.required], 
      description: ['',Validators.required],
      img: ['',Validators.required],
      endDate: ['',Validators.required],
      urlProyect: ['',Validators.required] 
    })
 }

//Para las validaciones
get NombreProyecto() {
  return this.forms.get("nameProyect");
}

get Descripcion() {
  return this.forms.get("description");
}
get ImgProyect() {
  return this.forms.get("img");
}
get UrlProyect() {
  return this.forms.get("urlProyect");
}
get FchaFin() {
  return this.forms.get("endDate");
}



ngOnInit(): void {
  // inicie con los datos cargados en el formulario
  const id = this.activatedRoute.snapshot.params['id'];
  this.proyectoService.detail(id).subscribe(data => {
    this.proye=data;
  }
  )
}

onUpdate(event:Event): void{
  event.preventDefault;
  
  console.log(this.forms.value);
  this.proyectoService.update(this.forms.value).subscribe(data=>{
    alert("Habilidad modificada!!!!");
    this.router.navigate(['']);
  }, err => {
    this.forms.markAllAsTouched();
    alert("Falló la modificación de la proyecto!");

  })
}


}

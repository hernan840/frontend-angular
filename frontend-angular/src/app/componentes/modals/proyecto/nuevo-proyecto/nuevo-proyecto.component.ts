import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent  implements OnInit{
  /* se crea una variable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder){
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms= this.formBuilder.group({
      nameProyec:['', Validators.required], 
      description: ['',Validators.required],
      img: ['',Validators.required],
      urlProyect: ['',Validators.required], 
      dend: ['',Validators.required]
    })
 }

ngOnInit() {}

get NombreProyecto() {
  return this.forms.get("nameProyec");
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
  return this.forms.get("dend");
}



onEnviar(event: Event) {
  console.log(this.forms) //para ver por consola
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault;

  if (this.forms.valid) {
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Formulario Enviado!")
  }
}
}

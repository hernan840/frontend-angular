import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      school: ['', Validators.required], 
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
      dstart: ['', [Validators.required, Validators.maxLength(10)]],
      dend: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  ngOnInit() { }

  get Escuela() {
    return this.forms.get("school");
  }

  get Titulo() {
    return this.forms.get("title");
  }
  get Descripcion() {
    return this.forms.get("description");
  }
  get Imagen() {
    return this.forms.get("img");
  }
  get FechaInicio() {
    return this.forms.get("dstart");
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

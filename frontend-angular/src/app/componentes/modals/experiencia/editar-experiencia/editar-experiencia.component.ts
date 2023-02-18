import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      company: ['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
      position: ['', Validators.required],
      description: ['', Validators.required],
      dstart: ['', [Validators.required, Validators.maxLength(10)]],
      dend: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  ngOnInit() { }

  get Compania() {
    return this.forms.get("company");
  }

  get Posicion() {
    return this.forms.get("position");
  }
  get Descripcion() {
    return this.forms.get("description");
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
